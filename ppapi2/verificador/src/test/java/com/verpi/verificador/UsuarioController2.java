package com.verpi.verificador;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.verpi.verificador.model.Usuario;

@RestController
@RequestMapping("/api/v1/usuario") 
public class UsuarioController2 {
	private static Long id = 1L; 
	private static List<Usuario> Usuarios = new ArrayList<>();
	
	@PostMapping({"/", ""})
	public Usuario inserir(@RequestBody Usuario u) {
		u.setId(id++);
		Usuarios.add(u);
		return u;
	}
	
	@GetMapping({"/{idAluno}"})
	public Usuario get(@PathVariable("idAluno") Long idAluno) {
		for (int x = 0; x < Usuarios.size();x++) {
			if (Usuarios.get(x).getId() == idAluno) {
				return Usuarios.get(x);
			}
		}
		return null;
	}
	
	@GetMapping({"/", ""})
	public List<Usuario> getAll() {
		return Usuarios;
	}
	
	@PutMapping({"/{idAluno}"})
	public Usuario put(@PathVariable("idAluno") Long idAluno, @RequestBody Usuario u) {
		for (int x = 0; x < Usuarios.size();x++) {
			if (Usuarios.get(x).getId() == idAluno) {
				Usuarios.get(x).setNome(u.getNome());
				Usuarios.get(x).setSenha(u.getSenha());
				return Usuarios.get(x);
			}
		}
		return null;
	}
	
	@DeleteMapping({"/{idAluno}"})
	public String delete(@PathVariable("idAluno") Long idAluno) {
		for (int x = 0; x < Usuarios.size();x++) {
			if (Usuarios.get(x).getId() == idAluno) {
				Usuarios.remove(x);
				return "Deletado";
			}
		}
		return "Não encontrado";
	}
}
