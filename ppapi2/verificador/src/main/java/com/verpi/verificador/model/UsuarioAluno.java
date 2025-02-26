package com.verpi.verificador.model;

import lombok.Data;

@Data

public class UsuarioAluno {
	private Long id;
	private Long idCursinho;
	private String nome;
	private String nota1;
	private String nota2;
	private String nota3;
}
