# O que é o React Native


<ul>
<li>[x] Primeiros passos no React Native - Aula 1 | Curso React Native (aprendiz) | Onebitcode
  <p>

<img src="https://user-images.githubusercontent.com/60934938/194756513-8b1e6be6-b0c9-4a54-8bd5-8815dd8c06a8.png"/>

  <a href="https://reactnative.dev/docs/getting-started">Docs</a>

  ![image](https://user-images.githubusercontent.com/60934938/194756585-7b4ef614-f717-4961-aec0-ba0ccfa4d2e0.png)</p>
</li>
</ul

# O que é o expo?
É uma ferramenta de app em react.

<a href="https://docs.expo.dev/">Docs expo</a>

# Criando um app

### Instalando o expo

    npm install --global expo-cli

### Crinado o app
    
    expo init "nome do projeto" ou yarn create react-native-app "nome do arquivo"

    - cd my-project
    - yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
    - yarn android
    - yarn ios # requires an iOS device or macOS for access to an iOS simulator
    - yarn web
    - expo start --tunnel # executa 
    

# Criando o APK

### Passo 1: Se não tiver instalado ainda instale

      npx expo install expo-updates
      
### Passo 2: rode o seguinte comando

      npx pod-install
      
### Passo 3: Execute o comando para buildar o projeto

      expo build:android -t apk
      expo build:ios -t apk
      
      ou
      
      npm install -g eas-cli
      eas build -p android
      

<a href="https://docs.expo.dev/bare/installing-updates/">Installing expo-updates</a>



# Configurando o app.json

### Passo 1: Gerando o icone e o icone de splashscreen

Entre no seguinte site <a href="https://apetools.webprofusion.com/#/tools/imagegorilla">Ape Tools</a> para gerar ambos.

<a href="https://www.youtube.com/watch?v=3Gf9yb53bJM">Tutotial</a>

# Passo 2: app.json

      {
      "expo": {
        "name": "Campo Minado",
        "slug": "Campo Minado",
        "icon": "./icone/calculadora.png",
        "version": "1.0.0",
        "platforms": [
          "ios",
          "android"
        ],
        "splash": {
          "resizeMode": "contain"
        },
        "android": {
          "package": "com.jeovane.campo_minado",
          "versionCode": 1
        }
      }
    }
    

 # Bloquie de orientação da tela
 
Várias orientações de tela devem funcionar bem por padrão, a menos que você esteja usando a DimensionsAPI e não manipule alterações de orientação. Se você não quiser oferecer suporte a várias orientações de tela, poderá bloquear a orientação da tela para retrato ou paisagem.

No iOS, na guia Geral e na seção Informações de implantação do Xcode, habilite a Orientação do dispositivo que você deseja oferecer suporte (certifique-se de ter selecionado o iPhone no menu Dispositivos ao fazer as alterações). Para Android, abra o arquivo AndroidManifest.xml e, dentro do elemento activity, adicione 'android:screenOrientation="portrait"'para travar em retrato ou 'android:screenOrientation="landscape"'para travar em paisagem.






