# Descrição

O modulo react-native-geocoding permite transformar uma descrição de um local (ou seja, endereço, nome da cidade, etc.) 
em coordenadas geográficas (ou seja, latitude e longitude) e vice-versa.

- <a href="https://www.npmjs.com/package/react-native-geocoding">Veja a documentção</a>


# Instalar

```

npm install --save react-native-geocoding

```

# Configurações

```
import Geocoder from 'react-native-geocoding';

Geocoder.init('SUA_CHAVE_API_DO_GOOGLE_MAPS');


```
## Como conseguir a chave?


- Acesse o Console do Desenvolvedor do Google: <a href="https://console.developers.google.com/">Entre nesse link</a>
- Crie um novo projeto ou selecione um projeto existente.
- Na página do projeto, clique em "Ativar APIs e Serviços".
- Na página de ativação de APIs, pesquise por "Maps JavaScript API" e "Geocoding API" e ative ambos.
- Clique em "Credenciais" no menu lateral esquerdo.
- Clique em "Criar credenciais" e selecione "Chave da API".
- Na janela que abrir, você pode configurar as restrições de uso da chave, como quais APIs ela pode acessar, quais URLs podem utilizá-la e limites de uso.
- Copie a chave gerada e utilize-a em seu aplicativo.

### Obs: cuidado com o limite de requisições grátis
### Obs: para usar essa funcionalidade é preciso ativar o faturamento, segundo a pagina developers.google.com se for exedito a quantidade maxima para o uso grátis não será cobrado nada apenas a interrupção do acesso a api.

### Código

```
import React,{useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Card, TextInput, Button } from 'react-native-paper';
import Geocoder from 'react-native-geocoding';

Geocoder.init('Sua chave');
export default function App() {
  const [date,setDate]= useState()
  const [locations, setLocations]= useState()
  const [erro,setErro] = useState(false)
  const submit=()=>{
    getCoordinatesFromAddress(date)
  }
  // const address = 'Rua Exemplo, 123 - Bairro - Cidade/Estado';
  const getCoordinatesFromAddress = async (address) => {
    

    if(!address){
      
      setErro(true)
      return
    }
    setErro(false)
    
    try {
      const res = await Geocoder.from(address);
      const { lat, lng } = res.results[0].geometry.location;
      console.log(lat)
      setLocations({ latitude: lat, longitude: lng });
    } catch (error) {
      console.error(error);
      
    }
  };
  return (
    <View style={styles.container}>
      <TextInput error={erro}  label="Address" onChangeText={(text)=>setDate(text)}/>
      <Button mode="contained" onPress={submit}>submit</Button>
      <Card>
        <Text style={styles.paragraph}>Latitude:{locations?.latitude}</Text>
        <Text style={styles.paragraph}>Latitude:{locations?.longitude}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});

```

### Resultado

![image](https://user-images.githubusercontent.com/60934938/232120282-750a84c5-5fdc-432a-b6cf-9daab599951a.png)
