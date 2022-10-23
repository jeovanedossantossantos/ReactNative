# React Navigation

O que segue na seção Fundamentos desta documentação é um tour pelos aspectos mais importantes do React Navigation. Ele deve cobrir o suficiente para você saber como construir seu pequeno aplicativo móvel típico e fornecer a base necessária para se aprofundar nas partes mais avançadas do React Navigation.

<a href="https://reactnavigation.org/docs/getting-started/">React Navigation - dcos</a>

        yarn add @react-navigation/native 

    ou

        npm install @react-navigation/native


# Installing dependencies into an Expo managed project

        npx expo install react-native-screens react-native-safe-area-context


# Instalando dependências em um projeto

        yarn add react-native-screens react-native-safe-area-context

    ou

        npm install react-native-screens react-native-safe-area-context

### Obs:. Caso for usar um mac ou roda algo no ios instale o seguinte pacote

        npx pod-install ios
        
# Stack navigator

As bibliotecas que instalamos até agora são os blocos de construção e as bases compartilhadas para navegadores, e cada navegador no React Navigation vive em sua própria biblioteca. Para usar o navegador de pilha nativo, precisamos instalar @react-navigation/native-stack:

        yarn add @react-navigation/native-stack
        
# Tab navigation

    Possivelmente, o estilo de navegação mais comum em aplicativos móveis é a navegação baseada em guias. Isso pode ser guias na parte inferior da tela ou na parte superior abaixo do cabeçalho (ou mesmo em vez de um cabeçalho).

        yarn add @react-navigation/bottom-tabs

    ou

        npm install @react-navigation/bottom-tabs


# Drawer navigation 

        yarn add @react-navigation/drawer

    ou 

        npm install @react-navigation/drawer


Você também precisa instalar react-native-gesture-handler e react-native-reanimated.

Se você tiver um projeto gerenciado pelo Expo, em seu diretório de projetos, execute:

        
        npx expo install react-native-gesture-handler react-native-reanimated
        
# Solução de erros:

![image](https://user-images.githubusercontent.com/60934938/197361622-8a95f305-6f09-49d6-b362-8bff18f0a2d6.png)

Seguir as prientações a seguir.

### Passo 1: abra o babel.config.js que deve está na raiz do projeto e modifique para:

obs: se no presets e no plugins tiver outros não exclua apenas adicione

                module.exports = function (api) {
                  api.cache(true);
                  return {
                    presets: [
                      'babel-preset-expo',
                      'module:metro-react-native-babel-preset'
                    ],
                    plugins: [
                      'react-native-reanimated/plugin',
                    ]
                  };
                };
                
### Passo 2: restarte a sua aplicação.

Para mais informações sobre o erro <a href="https://stackoverflow.com/questions/72927722/export-namespace-should-be-first-transformed-by-babel-plugin-proposal-export-n">clique aqui</a>


# Icones

<a href="https://github.com/oblador/react-native-vector-icons">Icones</a>

# React Native Elements

<a href="https://reactnativeelements.com/">Docs</a>

## Instalação 

<a href="https://reactnativeelements.com/docs/installation">Tutorial</a>

         yarn add react-native-elements
         
         yarn add react-native-vector-icons
