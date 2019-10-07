import React, {Component} from 'react';

import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  YellowBox,
} from 'react-native';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ]);
  }

  GetItem(nombre) {
    Alert.alert('Mas información', nombre);
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  render() {
    const DATA = [
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema.png'),
        texto:
          'La imagen principal muestra una vista transversal de los planetas del Sistema Solar. note la fran diferencia en tamaños entre los planetas internos y rocosos (entre ellos la tierra), los gigantes gaseosos como jupiter/Saturno y el sol. Es importante aclara que las distancias relativas entre planetas no estan representadas a escala en la figura, de otra manera la imagen no cabria siquiera en este pasillo.  El recuadro inferior ilustra un paisaje en la superficie del planeta marte cuya imagen fue adquirida en una de las misiones exploratorias. se alcanza a apreciar la puesta del sol en el horizonte marciano. Hay una gran diversidad de formas y tamaños en los planetas ¿Nos hablan estas marcadas diferencias de la historia de la formacion de nuestro sistema solar y de la tierra misma? Esto es aun un misterio Los objetos puntuales en la extrema derecha de la imagen principal son una representacion del sistema solar exterior, entre ellos plutos, otros objetos en el cinturon de kuiper y una gran cantidad de nucleos cometarios en la llamada nuve de oort. La imagen al final de esta cedula es precisamente un diagrama esquematico que ilustra las diferentes escalas dentro del sistema solar. Los recuadros superiores contrastan el tamaño de la orbita de jupiter (naranja) y del cinturon de asteroides (amarillo) en comparacion con el cinturon de kuiper (derecha, puntos en celeste). Este cinturon es un reservorio de cometas de corto periodo. notese como pluton pasa la mayor parte del tiempo en una orbita (magente) contenida dentro del cinturo de kuiper, cerca de otros objetos similares como eris, esto motivo en parte su cambio de denominacion a planeta enano. A pesar de la gran extencion del cinturon de kuiper, su radio es pequeño en comparacion con la orbita de otro objeto conocido como sedna (recuadro inferior izquierdo). Se cree que sedna es uno de los miembros mas interiores del gran reservorio de cometas llamado nuve de oort, la cual nunca ha sido observada de maneja directa. la diversidad en el sistema solar se extiende mas alla de los planetas y el llamado sistema solar externo aun no esta explorado en su totalidad ',
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema2.png'),
        texto:
          'Planetas Extrasolares disco de nucleos cometarios alrededor de la estrella fomalhaut y posible planeta gigante El desarrollo de nuevos demtodos de deteccion y estrategias de busqueda han permitido apenas muy recientemente inferir la presencia de planetas alrededor de estrellas vecinas al sol, dando origen a uno de los campos de investigacion mas fascinantes de la astronomia moderna: el estudio de planetas extrasolares.sin embargo falta camino por recorrer. aun no es posible obtener imagenes detalladas de planetas alrededor de otras estrellas y es un reto mayor el poder detectar planetas de tamaño similar o menores al de la tierra al rededor de las estrellas cercanas. para lograrlo se encuentra en construccion una nueva generacicon de telescopios los cuales se ubicaran tanto en tierra como en el espacio y que combinaran novedosas tecnicas de observacion, el uso de supercomputadores y nuevos detectores de luz ultrasensibles.aun asi, recientemente se logro obtener la imagen de un disco al rededos de la estrella de fomalhaut, la mas brillante de la constelacion del pez austral (piscis autralis en latin). este disco alberga posiblemente a un planeta gigante de casi tres veces la masa de jupitar, como se señala en el recuatro en planco. los astronomos aun debaten acerca de la naturaleza de este candidato a planeta Este disco es similar al cinturon de kuiper o al cinturon de asteroides en nuestro sistema solar y buena parte de los puntos rojos ahi contenidos seria equivalente a los nucleos cometarios por lo que se tambien se denominan discos de nucleos cometarios La imagen nos muestra la constelacion del pez austral y las constelaciones vecinas como capricornio (capricornius). En azul se resalta fomalhaut la estrella mas brillante de esa region. muchas estrellas que se pueden observar a simple vista en el cielo albergan discos y planetas como los de famalhaut y como los de nuestro sistema solar',
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema3.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema4.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema5.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema6.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema7.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema8.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema9.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema10.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema11.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema12.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema13.png'),
      },
      {
        nombre: 'Sistema Solar',
        ubicacion: require('./img/sistema14.png'),
      },
    ];

    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({item}) => (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Image source={item.ubicacion} style={styles.imageView} />

              <Text
                onPress={this.GetItem.bind(this, item.texto)}
                style={styles.textView}>
                {item.nombre}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },

  imageView: {
    width: '50%',
    height: 100,
    margin: 7,
    borderRadius: 7,
  },

  textView: {
    width: '50%',
    textAlignVertical: 'center',
    padding: 10,
    color: '#000',
  },
});
