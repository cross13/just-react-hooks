# Just React to the Hooks (JRH)


## Por que desarrollar en Componentes ?

Desarrollar en componentes te permite partir la UI piezas (reusables e independientes),
y asi poder analizar cada una de ellas aisladamente.
[Components and Props](https://reactjs.org/docs/components-and-props.html)

## Class & Functions

Podemos definir componentes de react de dos formas:
 - Con una Función
 - Con una Clase de ES6

### Functional Components
 - No tienen Ciclo de vida.

```javascript
const HelloWorld = (props) => {
    return <h1>Hello, {props.name}</h1>;
}
```


### Class Components
- Si tienen Ciclo de vida.

```javascript
class HelloWorld extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```


## State & Props in react.
El State y las Props son formas mediante las cuales podemos pasar y mantener
información dentro de nuestros Componentes

### Props
 - Las props son de solo lectura y nunca deben modificarse dentro de nuestro componente.
 - Los Componentes que solo aceptan props y renderizan se los llama "Stateless Components || Dummy Components"

### Local State
 - Podriamos definirlo como la memoria que tiene mi componente a lo largo de instanciación.
 - Esta permitido modificar el state.


## Hooks
En React 16.8 se agrego una nueva funcionalidad, la cual otorga el use de State dentro de componentes
que no son Clases
```javascript
const [toggle, setToggle] = useState(false);
```

## Por que usar Hooks ?
 - Mayor reutilización de codigo
 - Mejor nivel de abstracción en mi codigo
 - Te permite pensar los componentes de una forma mas sencilla

## Tips to refactor Class Components into a Functional components.

 - Identificar State
 - Identificar Life Cycle
 - Entender que Hook aplica para refactorizar mi componente

# Start

```sh
npm install
npm start
```
