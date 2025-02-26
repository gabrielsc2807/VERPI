package com.verpi.verificador.controller;

import com.verpi.verificador.dao.UsuarioDao;
import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.verpi.verificador.model.Aluno;
import com.verpi.verificador.model.Cursinho;
import com.verpi.verificador.model.Usuario;
import com.verpi.verificador.model.UsuarioAluno;
import com.verpi.verificador.model.UsuarioFilter;

import io.micrometer.common.util.StringUtils;

@RestController
@RequestMapping("/api/v1/usuario")
@CrossOrigin
public class UsuarioController {
	private final UsuarioDao usuarioDao;

	public UsuarioController(Jdbi jdbi){
		this.usuarioDao = jdbi.onDemand(UsuarioDao.class);
	}
	
		

	@PostMapping({ "/", "" })
	public Usuario inserir(@RequestBody Usuario u) {
		Long id = usuarioDao.inserir(u);
		u.setId(id);
		if(u.getTipo() == 0) {
			usuarioDao.criarAluno(id);
		}
		return u;
	}
	
	@PostMapping({"/cursinho/{idCursinho}"})
	public int inserirC(@PathVariable("idCursinho") Long idCursinho) {
		return usuarioDao.inserirC(idCursinho);
	}

	@GetMapping({ "/{idAluno}" })
	public Usuario get(@PathVariable("idAluno") Long idAluno) {
		return usuarioDao.consultarPorId(idAluno);
	}
	
	@PutMapping({ "/aluno" })
	public int attNotas(@RequestBody Aluno aluno) {
		return usuarioDao.attNotas(aluno);
	}
	
	@GetMapping({ "/aluno/{idAluno}" })
	public Aluno getAluno(@PathVariable("idAluno") Long idAluno) {
		return usuarioDao.consultarPorIdAluno(idAluno);
	}
	
	@GetMapping({ "/cursinho/{idCursinho}" })
	public List<UsuarioAluno> getAlunosCursinho(@PathVariable("idCursinho") Long idCursinho) {
		return usuarioDao.getAlunosCursinho(idCursinho);
	}
	
	@GetMapping({ "/cursinho/disponiveis" })
	public List<UsuarioAluno> getAlunosDisp() {
		return usuarioDao.getAlunosDisponiveis();
	}
	
	@PutMapping({ "/cursinho/{idCursinho}/{idAluno}" })
	public int addCurs(@PathVariable("idAluno") Long idAluno,@PathVariable("idCursinho") Long idCursinho) {
		return usuarioDao.attUsuCursinho(idAluno, idCursinho);
	}
	
	@GetMapping({ "/{nome}/{senha}" })
	public Usuario logar(@PathVariable("nome") String n, @PathVariable("senha") String s) {
		return usuarioDao.logar(n, s);
	}

	@GetMapping({ "/", "" })
	public List<Usuario> getAll() {
		return usuarioDao.consultar();
	}

	@PutMapping({ "/{idAluno}" })
	public int put(@PathVariable("idAluno") Long idAluno, @RequestBody Usuario u) {
		u.setId(idAluno);
		return usuarioDao.alterar(u);
	}

	@DeleteMapping({ "/{idAluno}" })
	public int delete(@PathVariable("idAluno") Long idAluno) {
		return usuarioDao.excluir(idAluno);
	}
	
	@PutMapping({ "/cursinho/{idAluno}" })
	public int deleteAluno(@PathVariable("idAluno") Long idAluno) {
		return usuarioDao.removerAluCur(idAluno);
	}
}
