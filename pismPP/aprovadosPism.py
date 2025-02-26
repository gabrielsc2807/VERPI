from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import NoSuchElementException
from unidecode import unidecode
import json
import sys

class CrawlerAprovados:
    def __init__(self) -> None:
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        self.driver.maximize_window()
        self.dataC = []

    def clicar(self, item):
        ActionChains(self.driver).move_to_element(item).perform()
        item.click()

    def find_xpath(self, item):
        return self.driver.find_element('xpath', item)
    
    def get_carregar(self, item, max):
        while max > 0:
            try:
                return self.find_xpath(item)
            except:
               max -= 1
        raise NoSuchElementException
    
    def get_carregartext(self, item, max):
        while max > 0:
            itemL = self.get_carregar(item, 5)
            if itemL.text == '':
                max -= 1
            else:
                return itemL
        raise NoSuchElementException
    
    def clicarCarregar(self, item, max):
        while max > 0:
            try:
                return self.clicar(self.find_xpath(item))
            except:
                max -= 1
        raise NoSuchElementException
    
    def textClicarCarregar(self, item, max):
        while max > 0:
            try:
                texto = self.get_carregartext(item, 500).text
                self.clicar(self.find_xpath(item))
                return texto
            except:
                max -= 1
        raise NoSuchElementException
    

    
    def get_allaprovados(self):
        try:
            self.driver.get('http://www4.vestibular.ufjf.br/2024/resultadofinalpism3/index.html')
            self.clicarCarregar("/html/body/section/div[3]/div/div/table/tbody/tr[1]/td/a", 500)
            flagI = False
            indI = 1
            while not flagI:
                try:
                    if(indI > 1):
                        self.dataC.append(campus)
                    campus = {'Nome' : self.textClicarCarregar("/html/body/section/div[3]/div/div/table/tbody/tr[$I$]/td/a".replace('$I$', str(indI)), 1), 'Cursos' : []}
                    indI += 1
                    indC = 1
                    flagC = False
                    while not flagC:
                        try:
                            campus['Cursos'].append({'Nome' : self.textClicarCarregar("/html/body/section/div[3]/div/div/table/tbody/tr[$I$]/td/a".replace('$I$', str(indC)), 1), 'Grupos' : []})
                            indC +=1
                            indG = 1
                            flagG = False
                            while not flagG:
                                try:
                                    campus['Cursos'][indC-2]['Grupos'].append({'Nome' : self.textClicarCarregar("/html/body/section/div[3]/div/div/table/tbody/tr[$I$]/td/a".replace('$I$', str(indG)), 1), 'DataAlunos': self.driver.execute_script("return testdata")['data']})
                                    self.clicarCarregar('/html/body/section/div[2]/div[2]/div/a[2]', 50)
                                    indG +=1
                                except:
                                    flagG = True
                                    self.clicarCarregar('/html/body/section/div[3]/div/a[1]', 50)
                                    self.dataC = campus
                        except:
                            flagC = True
                            self.driver.get('https://processoseletivo.ufjf.br//2024/resultadofinalpism3/aprov.html')
                            
                except:
                    flagI = True
        except:
            tipo_excecao, valor_excecao, traceback = sys.exc_info()
            print(f"Tipo de Exceção: {tipo_excecao}")
            print(f"Valor da Exceção: {valor_excecao}")
            print(f"Traceback: {traceback}")


site = CrawlerAprovados()
site.get_allaprovados()
with open('lista_aprovados.json', 'w') as arquivo:
            json.dump(eval(unidecode(str(site.dataC))), arquivo)