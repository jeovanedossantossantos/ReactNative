# Expo Image Picker

<a href="https://docs.expo.dev/versions/latest/sdk/imagepicker/">Expo Image Picker</a>

## Installation

      npx expo install expo-image-picker

Nas configurações coloque 


```
{
  "expo": {
    "plugins": [
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ]
  }
}


```

## Usando 

```
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

```


### Objeto retornado

```
{
  "assets": [
    {
      "assetId": "C166F9F5-B5FE-4501-9531",
      "base64": null,
      "duration": null,
      "exif": null,
      "fileName": "IMG.HEIC",
      "fileSize": 6018901,
      "height": 3025,
      "type": "image",
      "uri": "file:///data/user/0/host.exp.exponent/cache/cropped1814158652.jpg"
      "width": 3024
    }
  ],
  "canceled": false,
  "cancelled": false
}


```

### Usando com AWS S3
Consulte o <a href="https://github.com/expo/examples/tree/master/with-aws-storage-upload">exemplo with-aws-storage-upload</a> . Siga <a href="https://docs.amplify.aws/">os documentos do Amplify</a> para configurar seu projeto corretamente.

### Usando com Firebase
Consulte o <a href="https://github.com/expo/examples/tree/master/with-firebase-storage-upload">exemplo with-firebase-storage-upload</a> . Certifique-se de seguir o guia <a href="https://docs.expo.dev/guides/using-firebase">Usando o Firebase</a> para configurar seu projeto corretamente.


