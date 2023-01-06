import { StatusBar } from 'expo-status-bar';
import {  View,Text } from 'react-native';
import { styles } from "./src/appStyle";
import Icon from 'react-native-vector-icons/Octicons';
import IconB from 'react-native-vector-icons/FontAwesome5';
import IconC from 'react-native-vector-icons/Feather';
import IconD from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useEffect } from 'react';
export default function App() {

  return (
    <View style={styles.container}>

    <View style={styles.menuAndProfile}>
      <IconB name="user-circle" size={25} color="#4F8EF7" />
      <IconC name="menu" size={25} color="#4F8EF7" />
    </View>

    <View style={styles.containerBalance}>

      <Text style={styles.textBalance}>123.456,78 ARS</Text>
      <Text style={styles.textWhite}>Balance Total <IconC name="chevron-down" size={16} color="#4F8EF7" /></Text>

      <View style={styles.containerBalanceButtons}>
        <View style={styles.containerBalanceBox}>
          <Icon name="download" size={22} color="#4F8EF7" />
          <Text style={styles.textWhite}>Recibir Pago</Text>
        </View>

        <View style={styles.containerBalanceBox}>
          <Icon name="upload" size={22} color="#4F8EF7" />
          <Text style={styles.textWhite}>Enviar Pago</Text>
        </View>
      </View>
    </View>

    <View style={styles.containerBalance}>
      <View style={styles.menuAndProfile}>
        <Text style={styles.textBoxs}>Links de pago</Text>
        <Text style={styles.textBlue}>+ Crear Nuevo</Text>
      </View>

      <View style={styles.menuAndProfile}>
        <Text style={styles.textWhite}>Link Stablecoins</Text>
        <View style={styles.containerInfoandCopy}>
          <IconC name="copy" size={20} color="#4F8EF7" />
          <IconC name="info" size={20} color="#4F8EF7" />
        </View>
      </View>

      <View style={styles.menuAndProfile}>
        <Text style={styles.textWhite}>Ethereum Link <IconD name="ethereum" size={18} color="#4F8EF7" /></Text>
        <View style={styles.containerInfoandCopy}>
          <IconC name="copy" size={20} color="#4F8EF7" />
          <IconC name="info" size={20} color="#4F8EF7" />
        </View>
      </View>
    </View>

    <View style={styles.containerBalance}>
      <View style={styles.menuAndProfile}>
        <Text style={styles.textBoxs}>Últimas transacciones</Text>
      </View>

      <View style={styles.menuAndProfile}>
        <View style={styles.containerInfo}>
          <IconD name="ethereum" size={33} color="#4F8EF7" />
        
          <View style={styles.infoAndDate}>
            <Text style={styles.textWhite}>Envío exitoso</Text>
            <Text style={styles.textGray}>05/12/2022</Text>
          </View>
        </View>

        <View style={styles.infoAndCash}>
          <Text style={styles.textBoldWhite}>-400 ETH</Text>
          <Text style={styles.textGray}>-126.400 ARS</Text>
        </View>
      </View>

      <View style={styles.menuAndProfile}>
        <View style={styles.containerInfo}>
          <IconD name="ethereum" size={33} color="#4F8EF7" />
        
          <View style={styles.infoAndDate}>
            <Text style={styles.textWhite}>Recepción exitosa</Text>
            <Text style={styles.textGray}>04/12/2022</Text>
          </View>
        </View>

        <View style={styles.infoAndCash}>
          <Text style={styles.textBoldGreen}>+500 ETH</Text>
          <Text style={styles.textGray}>+158.000 ARS</Text>
        </View>
      </View>

      <View style={styles.menuAndProfile}>
        <View style={styles.containerInfo}>
          <IconD name="ethereum" size={33} color="#4F8EF7" />
        
          <View style={styles.infoAndDate}>
            <Text style={styles.textWhite}>Recepción exitosa</Text>
            <Text style={styles.textGray}>04/12/2022</Text>
          </View>
        </View>

        <View style={styles.infoAndCash}>
          <Text style={styles.textBoldGreen}>+0.002 ETH</Text>
          <Text style={styles.textGray}>+428,15 ARS</Text>
        </View>
      </View>
      <Text style={{color:"#4F8EF7", marginBottom:10}}>Ver más</Text>
    </View>
    <StatusBar style="auto" />
    </View>
    
  );
}
