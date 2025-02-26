package com.verpi.verificador.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class Usuario {
	private Long id;
	private String nome;
	private String senha;
	private int tipo;
	
	public Usuario(String n, String s, int t){
		this.nome = n;
		this.senha = s;
		this.tipo = t;
	}
}
