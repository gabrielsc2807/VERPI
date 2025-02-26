package com.verpi.verificador.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.AllowUnusedBindings;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.customizer.BindList;
import org.jdbi.v3.sqlobject.customizer.DefineNamedBindings;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.jdbi.v3.stringtemplate4.UseStringTemplateEngine;
import org.springframework.stereotype.Repository;

import com.verpi.verificador.model.Aluno;
import com.verpi.verificador.model.Usuario;
import com.verpi.verificador.model.UsuarioAluno;


@Repository
@RegisterBeanMapper(Usuario.class)
@RegisterBeanMapper(UsuarioAluno.class)
@RegisterBeanMapper(Aluno.class)
public interface UsuarioDao {

	@GetGeneratedKeys
	@SqlUpdate(" insert into usuario (nome, senha, tipo) "
			+ " values (:nome, :senha, :tipo);")
	public Long inserir(@BindBean Usuario u);

	@SqlQuery(" select * from usuario;")
	public List<Usuario> consultar();
	
	@SqlQuery(" select aluno.*, user.nome from usualuno as aluno join usuario as user on user.id = aluno.id where idCursinho = :id;")
	public List<UsuarioAluno> getAlunosCursinho(@Bind("id") Long id);
	
	@SqlQuery(" select * from usuario "
			+ " where id = :id;")
	public Usuario consultarPorId(@Bind("id") Long id);
	
	@SqlQuery(" select * from usualuno "
			+ " where id = :id;")
	public Aluno consultarPorIdAluno(@Bind("id") Long id);
	
	@SqlQuery(" select aluno.*, user.nome  from usualuno as aluno join usuario as user on user.id = aluno.id where idCursinho = 0" )
	public List<UsuarioAluno>getAlunosDisponiveis();
	
	@SqlUpdate(" insert into usualuno (id, nota1, nota2, nota3, idCursinho) "
			+ " values (:id, '', '', '', 0);")
	public void criarAluno (@Bind("id") Long id);
	
	@SqlUpdate("INSERT INTO cursinho (id) VALUES (:id)")
	public int inserirC (@Bind("id") Long id);
	
	@SqlUpdate("update usualuno set nota1 = :nota1, nota2 = :nota2, nota3 = :nota3 where id = :id;")
	public int attNotas(@BindBean Aluno a);
	
	@SqlUpdate("update usualuno set idCursinho = :idC where id = :idA;")
	public int attUsuCursinho(@Bind("idA") Long idA, @Bind("idC") Long idC);
	
	@SqlUpdate("update usualuno set idCursinho = 0 where id = :idA;")
	public int removerAluCur(@Bind("idA") Long idA);
	
	@SqlQuery(" select * from usuario "
			+ " where nome = :nome and senha = :senha;")
	public Usuario logar(@Bind("nome") String n, @Bind("senha") String s);
	
	@SqlUpdate(" update usuario "
			+ "  set nome = :nome, "
			+ "      senha = :senha, tipo = :tipo "
			+ " where id = :id;")
	public int alterar(@BindBean Usuario u);
	
	@SqlUpdate(" delete from usuario "
			+ " where id = :id;")
	public int excluir(@Bind("id") Long id);
	
	@SqlQuery(" SELECT * FROM usuario  \n" +
            " WHERE 1 = 1 "
            + "<if(nome)> and nome like = :nome \n<endif>"+
            "<if(senha)> and senha like = :senha \n<endif>"+
            "<if(tipo)> and tipo = :tipo \n<endif>"
            +"ORDER id;")
    @AllowUnusedBindings
    @DefineNamedBindings
    @UseStringTemplateEngine
    List<Usuario> getByFilter(
            @Bind String nome,
            @Bind String senha,
            @Bind Long id,
            @Bind Integer tipo,
            @BindList(value = "statusList", onEmpty = BindList.EmptyHandling.NULL_VALUE) List<String> statusList
    );
}
