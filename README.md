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
    

 # Bloqueio de orientação da tela
 
Várias orientações de tela devem funcionar bem por padrão, a menos que você esteja usando a DimensionsAPI e não manipule alterações de orientação. Se você não quiser oferecer suporte a várias orientações de tela, poderá bloquear a orientação da tela para retrato ou paisagem.

No iOS, na guia Geral e na seção Informações de implantação do Xcode, habilite a Orientação do dispositivo que você deseja oferecer suporte (certifique-se de ter selecionado o iPhone no menu Dispositivos ao fazer as alterações). Para Android, abra o arquivo AndroidManifest.xml e, dentro do elemento activity, adicione 

      'android:screenOrientation="portrait"'


para travar em retrato ou 

      'android:screenOrientation="landscape"'     

para travar em paisagem.

Uma outra alternativa é seguir a documentação do expo.

### Passo 1

No termina do seu projeto execute.

        npx expo install expo-screen-orientation
        
### Passo 2

Agora no index.js ou index.tsx importe.

      import * as ScreenOrientation from 'expo-screen-orientation';

Adicione a seguinte função.

      async function changeScreenOrientation() {
          await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
      
      
E chame ela antes do regiterRootComponent(App).

      changeScreenOrientation()
      
      
<a href="https://docs.expo.dev/versions/latest/sdk/screen-orientation/">Docs - expo ScreenOrientation</a>



<a href="https://dev.to/jhonywalkeer/expo-adicionando-uma-tela-inicial-e-icones-59dc">Expo - Adicionando uma tela inicial e ícones</a>

<a href="https://medium.com/reactbrasil/adicionando-uma-splash-screen-no-react-native-29262db674f8">Adicionando uma splash screen no React Native</a>

<a href='https://docs.expo.dev/guides/splash-screens/'>Create a Splash Screen</a>



# Usando o TypeScript

### Configurações

Criar o tsconfig.json e coloque essas linhas nele:


        {
            "extends": "expo/tsconfig.base",
            "compilerOptions": {
            "experimentalDecorators": true,
            "forceConsistentCasingInFileNames": true,
            "isolatedModules": true,
            "lib": ["ESNext"],
            "noEmitHelpers": true,
            "noFallthroughCasesInSwitch": true,
            "noImplicitReturns": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "strict": true
            }
        }

### Instalando dependencias

        yarn add @types/react -D
        yarn add  @types/react-native -D
        yarn add ts-node -D
        yarn add typescript -D
       
        ou

        yarn add @types/react @types/react-native ts-node typescript -D

        
        yarn add expo-updates
        yarn add @expo/webpack-config

        ou 

        yarn add expo-updates @expo/webpack-config

### Usando o styled-components

        yarn add styled-components
        yarn add @types/styled-components-react-native


### OBS:. packege.json 
No packege.json do projeto altere o main de "main":"index.js" para "main": "./src/index.tsx"


### Executar 

        expo start --tunnel # executa
        
### Instalando o @fortawesome

        yarn add react-native-svg @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-native-fontawesome

### Add more styles or Pro icons

        yarn add @fortawesome/free-brands-svg-icons

        yarn add @fortawesome/free-regular-svg-icons


<a href="https://www.npmjs.com/package/@fortawesome/react-native-fontawesome#get-started">@fortawesome/react-native-fontawesome
</a>

### Obs: caso aconteça o seguinte erro:

        Erro while updating property fill of a view managed by: RNSVGPath

Instale o seguinte pacote:

        yarn add react-native-svg@9.13.3

Motivo: A partir de 17 de fevereiro de 2020, a instalação da versão 9.13.3 do react-native-svg resolverá seu problema.

Aparentemente, usar a CLI de instalação do expo instalará a versão mais recente deste pacote, mas isso causará um erro ao iniciar o projeto (você verá que especificou qual versão do pacote é suportada pelo expo).

<a href="https://stackoverflow.com/questions/59830102/error-while-updating-property-fill-of-a-view-managed-by-rnsvgreact">Fonte - stackoverflow</a>


# Caso Swipeable não funcione

Nesse link tem varias alternativas <a href="https://stackoverflow.com/questions/57428224/react-native-gesture-handler-swipeable-is-not-working-on-android">link</a>

Para mim o que deeu certo foi envolver o Swipeable em um GestureHandlerRootView.
