package com.verpi.verificador.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioFilter {
	private String nomeIni;
    private String nomeFim;
    private Long id;
    private Integer tipo;
	public String getnomeIni() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setnomeIni(String nome) {
		// TODO Auto-generated method stub
		
	}
	public void setIdade(String nomefim) {
		// TODO Auto-generated method stub
		
	}
	public String getIdade() {
		// TODO Auto-generated method stub
		return null;
	}
	public String getnomeFim() {
		// TODO Auto-generated method stub
		return null;
	}
	public void setnomeFim(String nome) {
		// TODO Auto-generated method stub
		
	}
	
}
