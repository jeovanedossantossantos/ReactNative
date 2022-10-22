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
