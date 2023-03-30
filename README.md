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

### Obs: Caso aconteça o seguinte erro:

    Invariant Violation: requireNativeComponent: "RNSVGSvgViewAndroid" was not found in the UIManager.
    
Instale a seguinte verção do react-native-svg

    "react-native-svg": "13.4.0"

<a href="https://stackoverflow.com/questions/59830102/error-while-updating-property-fill-of-a-view-managed-by-rnsvgreact">Fonte</a>
   

# Caso Swipeable não funcione

Nesse link tem varias alternativas <a href="https://stackoverflow.com/questions/57428224/react-native-gesture-handler-swipeable-is-not-working-on-android">link</a>

Para mim o que deeu certo foi envolver o Swipeable em um GestureHandlerRootView.

# AsyncStorage

Pecistencia dos dados.

Instale o seguinte modulo, pois a versão do react-native está depreciada e do Obs: react-native-community/async-storage está descomtinuado.

            yarn add @react-native-async-storage/async-storage
            npx expo install @react-native-async-storage/async-storage - só se estiver usando o expo
            
     
            
<a href="https://www.npmjs.com/package/@react-native-async-storage/async-storage">Mais informações</a>

# react-native-pape

- <a href="https://callstack.github.io/react-native-paper/index.html">Docs</a>
- <a href="https://www.youtube.com/watch?v=GfmrZjyabXo">Video</a>
- <a href="https://github.com/silviosampaio/money-runners-app">Repositorio</a>

# Ocultar cabeçalho no navegador de pilha Navegação React

Para todas as telas 

```
<Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen name="route-name" component={ScreenComponent} />
 
</Stack.Navigator>

```

Se você deseja apenas ocultar o cabeçalho em 1 tela, pode fazer isso definindo screenOptions no componente de tela, veja abaixo, por exemplo:

```
<Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen name="route-name" component={ScreenComponent} />
  <Stack.Screen options={{headerShown: false}} name="route-name" component={ScreenComponent} />
</Stack.Navigator>

```

<a href="https://stackoverflow.com/questions/44701245/hide-header-in-stack-navigator-react-navigation">Mais informações</a>


# React Native LightBox 

- <a href="https://www.youtube.com/watch?v=iftjFSjspuk">Vídeo</a>
- <a href="https://www.npmjs.com/package/react-native-lightbox-v2">npm - react-native-lightbox-v2
</a>

```

<View style={styles.container}>
        <Lightbox>
          <Image
            style={{ height: 300, width: 300 }}
            source={{
              uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg',
            }}
          />
        </Lightbox>
      </View>

```
- <a href='https://www.crowdbotics.com/blog/how-to-create-a-custom-gallery-view-in-react-native'>Carrosel</a>

# Obs: Caso aconteça esse erro

```
Invariant Violation: ViewPropTypes has been removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.

```
- npm install deprecated-react-native-prop-types
- em  node_modules/react-native/index.js substitua da linha 436 até 464

```
// Deprecated Prop Types
  get ColorPropType(): $FlowFixMe {

    return require('deprecated-react-native-prop-types').ColorPropType
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType
  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType
  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes
  },

```
- apos execute npx patch-package react-native

<a href="https://stackoverflow.com/questions/71702392/viewproptypes-will-be-removed-from-react-native-migrate-to-viewproptypes-export">Mais informações</a>

# Como Criar um Hyperlink no React Native

```
<Text 
    style={styles.hyperlinkStyle} 
    onPress={() => { 
      Linking.openURL('https://reactnative.dev'); 
    }}> 
    Site Oficial do React Native 
  </Text>

```

<a href="https://developerplus.com.br/como-criar-um-hyperlink-no-react-native/#:~:text=Como%20Usar%20o%20Componente%20Linking,ser%C3%A1%20aberto%20no%20navegador%20padr%C3%A3o.">Mais informações</a>


# Carrosel feito na mão

```
const { width } = Dimensions.get('window');
const SPACING = 10;
const THUMB_SIZE = 70;
const [indexSelected, setIndexSelected] = useState(0);

    const onSelect = (indexSelected: number) => {
        setIndexSelected(indexSelected);
        
    };
const onScrollEnd = (e: { nativeEvent: { contentOffset: any; layoutMeasurement: any; }; }) => {
        const contentOffset = e.nativeEvent.contentOffset;
        const viewSize = e.nativeEvent.layoutMeasurement;

        // Divide the horizontal offset by the width of the view to see which page is visible
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        onSelect(pageNum)

    }

    return (
        <>
            <FlatList

                horizontal
                data={images}
                pagingEnabled
                style={{ marginLeft: -10, }}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: SPACING
                }}
                keyExtractor={(item) => item.data}
                onMomentumScrollEnd={onScrollEnd}
                // 
                renderItem={({ item}) => (


                    <Image

                        style={{
                            width: width + 8,

                            height: width,

                        }}
                        source={{ uri: item.data }}
                    />

                )
                }

            />
            <View
                style={{
                    marginTop: 25,
                    paddingHorizontal: 32,
                    alignSelf: 'flex-end',
                    position: "absolute",
                    // position: "relative",
                    borderRadius: 10,

                    justifyContent: "center",
                    alignItems: "center"

                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        backgroundColor: "#cccccc2b",
                        
                        marginTop: 105,
                        width: 60,
                        textAlign: "center",
                        borderRadius: 10,


                    }}
                >
                    {indexSelected + 1}/{images.length}
                </Text>
            </View>

        </>
        )

```

- <a href="https://www.crowdbotics.com/blog/how-to-create-a-custom-gallery-view-in-react-native">Mais informações</a>
# Animated

- <a href="https://stackoverflow.com/questions/41932345/get-current-value-of-animated-value-react-native">Ajuda</a>
- <a href="https://reactnative.dev/docs/animatedvalue">Docs</a>
- <a href="https://snack.expo.dev/@ubahthebuilder/b179dc?platform=android">Exemplo em funcionamento</a>
- <a href="https://www.youtube.com/watch?v=YC17-JnrYQE">Video</a>

# OBS: O ecesso de uso do FlatList

Ao usar o FlatList dentro de uma componente ScrollView pode acarretar o seguinte erro:

```

 ERROR  VirtualizedLists should never be nested inside plain ScrollViews with the same orientation 
 because it can break windowing and other functionality - use another VirtualizedList-backed container instead.    
 
```

Caso isso aconteça a melhor aternativa possa ser o uso do map em vez do FlatList.
Esse erro ocorre pois o FlatList possui um ScrollViews na sua composição e o React Native não aceita muito  bem isso.

# Login pelo google


- <a href="https://docs.expo.dev/guides/authentication/#google">Documentação</a>
- <a href="https://www.youtube.com/watch?v=QT0PXhH9uTg">Vídeo 1</a>
- <a href="https://github.com/chelseafarley/google-auth-demo">Repositorio 1</a>
- <a href="https://www.youtube.com/watch?v=YX7IWOQIKA0">Vídeo 2</a>
- <a href="https://github.com/JeremyPersing/apartmentsclone">Repositorio 2</a>
- <a href="https://github.com/Mateus-code-98/jogoDaVelhaMobile/blob/master/src/pages/SignIn/index.tsx">Code</a>

## Passos 

- Instale o ```npx expo install expo-application```
- Depois entre no link das <a href="https://console.developers.google.com/apis/credentials">credenciais</a>
- Existem 4 tipos diferentes de IDs de cliente que você pode fornecer:

    - expoClientId: ID do cliente proxy para uso na Expo Go em iOS e Android.
    - iosClientId: ID do cliente nativo do iOS para uso em fluxo de trabalho autônomo e básico.
    - androidClientId: ID do cliente nativo do Android para uso em fluxo de trabalho simples e autônomo.
    - webClientId: Expo web client ID para uso no navegador.
    
    
- expoClientId: na pagina de credenciais crie um projeto depois celecione o seu perojeto e click em credenciais, assim no tompo selecione criar credenciais e click em OAuth client ID, apos isso você precisa configura a tela de consentimento. Apos isso resolvido, selecione em Application type a opção Web application.

    - No campo name coloque Expo Go Proxy
    - URIs (origens JavaScript autorizadas): https://auth.expo.io
    - URIs de redirecionamento autorizados : https://auth.expo.io/@your-username/your-project-slug
    
- iosClientId: faça o mesmo processo do expoClientId só que em Application type selecione IOS em name coloque o nome que form mais conveniente e no campo Bundle ID coloque ex: ```host.exp.exponent```.

- androidClientId:faça o mesmo processo do expoClientId só que em Application type selecione Android em name coloque o nome que form mais conveniente e no campo Package name coloque o id gerado do iosClientId. Agora no terminal do projeto diite ```openssl rand -base64 32 | openssl sha1 -c``` isso ira gera um código, copio e coloque no campo SHA-1 certificate ...

# Facebook

  
- <a href="https://developers.facebook.com/docs/graph-api/overview?locale=pt_BR">Docs api facebbok</a>
- <a href="https://www.youtube.com/watch?v=R3iLeGCjdTY">Video 1</a>
- <a href="https://www.youtube.com/watch?v=m9mfrUA2DIk">Vídeo 2</a>

## Chamada na api | GET

```https://graph.facebook.com/me?fields=id,email&access_token=${accessToken}```

## Resposta da api

```
{
  "email": "funlano@email.com",
  "id": "id",
}
```

# Sobreamento 
- <a href="https://www.cssmatic.com/box-shadow">Opção 1</a>
<img width=400 src="https://user-images.githubusercontent.com/60934938/216689649-b6bf09e3-2053-479f-b567-f554662d0909.png"/>


- <a href="https://ethercreative.github.io/react-native-shadow-generator/">Opção 2</a>
<img width=400 src="https://user-images.githubusercontent.com/60934938/216689848-ac57bf29-fae8-499b-989c-d72809934d78.png"/>

# Importando imagens do assets

- <a href="https://stackoverflow.com/questions/50334238/react-native-image-invalid-prop-source-supplied-to-image">Mais informações</a>
```
const images = {
  logo: {
    uri: require('your-image-path/logo.png')
  },
  banner: { 
    uri: require('your-image-path/banner.png')
  }
}

export { images }; 


//YourComponent.js
import { images } from 'yourImagesPath';

// for this test, expected to return [ { name: logo }, { name: banner} ]
const imagesFromTheServer = (your fetch);

imagesFromTheServer.map(image => {
  if (!images[image]) {
    return <Text>Image not found</Text>;
  }
  return <Image source={images[image].uri} />; // if image = logo, it will return images[logo] containing the require path as `uri` key
});

```

# ActivityIndicator

```
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;

```
# Video no React Native

- [x] <a href="https://www.youtube.com/watch?v=0GOUF8vNqzE">Vídeo</a>
- [x] <a href="https://lonelycpp.github.io/react-native-youtube-iframe/">Docs</a>

```
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}

```

# Pegar o tamanho da tela 

No proprio react native existe o  useWindowDimensions

```
import { useWindowDimensions } from "react-native";

const { width } = useWindowDimensions();

```

Também do react native existe outra opção 

```

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

```

# Trabalhando com arquivos SVG

## Passo 1
Crie um pasta assets e coloque seu arquivo nela.E no arquivo metro.config.js cole o seguinte código.

```
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
```

Depois instale o seguinte pagete 


```
npm i react-native-svg-transformer

```

## Passo 2
Na raiz do projeto crie um arquivo .svgrrc e cole o seguinte codigo dendro

```

    "replaceAttrValues": {
        "#000": "{props.fill}",
        "#fff": "{props.stroke}"
    }
}

```

## Passo 3

Tambem na raiz do projeto crie um arquivo custom.d.ts  e cole o seguinte código dentro 

```
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
```

Depois importe onde deseja a imagem

```
import Svg1 from "caminho_da_imagem/nome.svg";

<Svg1
          width={25}
          height={25}
          stroke={"red"}
        />

```
# Dropdow

<a href="https://fateh999.github.io/react-native-paper-dropdown/#/README?id=installation">react-native-paper-dropdown</a>

<a href="https://medium.com/@kalebjdavenport/how-to-create-a-grid-layout-in-react-native-7948f1a6f949">FlexBox</a>

<a href="https://blog.logrocket.com/using-flexbox-react-native/">Flexbox</a>

<a href="https://uxdesign.cc/ui-cheat-sheet-dropdown-field-a30025c0f432">UX-DropDown</a>

# How to mask Text and TextInput components in React Native and Expo

<a href="https://www.npmjs.com/package/react-native-masked-text">react-native-masked-text</a>
