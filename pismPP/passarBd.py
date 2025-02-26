import json

with open('teste.json', 'r') as arquivo:
        dados = json.load(arquivo)
print(dados)
