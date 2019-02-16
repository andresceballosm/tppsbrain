import React,{Component} from 'react'
import { StyleSheet,Text,View,Image,TouchableOpacity,Animated } from 'react-native';

class Collapsible extends Component{
    constructor(props){
        super(props);

        this.icons = {
            'up'    : require('../../Assets/icons/Arrowhead-01-128.png'),
            'down'  : require('../../Assets/icons/Arrowhead-Down-01-128.png')
        };

        this.state = {
            title       : props.title,
            expanded    : false,
            maxHeight: '',
            minHeight: ''
        };
    }

    toggle(){
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        if (this.state.maxHeight === '') {
            this.setState({
            maxHeight: event.nativeEvent.layout.height,
            });
        }
    }

    _setMinHeight(event){
        if(this.state.minHeight === ''){
            this.setState({
                minHeight : event.nativeEvent.layout.height,
                animation: new Animated.Value(event.nativeEvent.layout.height),
            });
        }
    }

    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        return (
            <Animated.View 
                style={[styles.container,{height: this.state.animation}]}>
                <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image
                            style={styles.buttonImage}
                            source={icon}
                        ></Image>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container   : {
        //backgroundColor: '#fff',
        margin:10,
        overflow:'hidden',
        borderBottomWidth: 0.2,
    },
    titleContainer : {
        flexDirection: 'row'
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'#2a2f43',
        fontWeight:'bold'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});

export default Collapsible;