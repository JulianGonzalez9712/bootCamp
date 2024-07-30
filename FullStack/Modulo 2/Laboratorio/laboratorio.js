// Objetivo: Implementar un sistema de gestión de tareas que utilice diferentes estructuras de datos y 
// algoritmos, evaluando su eficiencia en distintos escenarios.
// Parte 1: Implementación del Sistema
// 1.1 Crear una clase Tarea con atributos como id, descripción, prioridad y estado.
// 1.2 Implementar las siguientes estructuras para gestionar las tareas:
// • Lista de tareas pendientes (usar una lista enlazada) 
// • Cola de tareas en progreso 
// • Pila de tareas completadas 
// 1.3 Implementar un árbol binario de búsqueda para organizar las tareas por prioridad.
// 1.4 Crear un grafo simple para representar dependencias entre tareas.


console.log("Laboratorio");

class Tareas {
    constructor(tarea){
        this.id = null;
        this.descripcion = "";
        this.prioridad = null;
        this.estado = "";
        this.tarea = tarea;
        this.next = null;
    }
}


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// Definición de la lista enlazada
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Método para insertar un nueva tarea al final de la lista
    agregarFinal(tarea) {
        let newTarea = new Tareas(tarea);
        if (!this.head) {
            this.head = newTarea;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newTarea;
    }

    // Método para imprimir los elementos de la lista enlazada
    actualizarLista(item=null) {
        if (item){
            nuevaTarea.agregarFinal(item);
        }
        let current = this.head;
        let output = '';
        while (current !== null) {
            output += `${current.tarea} -> `;
            current = current.next;
        }
        output += 'null';
        document.getElementById('salida').textContent = output;
    }
}

// Ejemplo de uso de la lista enlazada
let nuevaTarea = new LinkedList();


// class Tarea {
//     constructor(id, descripcion, prioridad, estado) {
//         this.id = id;
//         this.descripcion = descripcion;
//         this.prioridad = prioridad;
//         this.estado = estado;
//     }
// }

// // 1.2 Estructuras de gestión de tareas
// class NodoTarea {
//     constructor(tarea) {
//         this.tarea = tarea;
//         this.siguiente = null;
//     }
// }

// class ListaTareasPendientes {
//     constructor() {
//         this.primero = null;
//         this.ultimo = null;
//     }

//     agregarTarea(tarea) {
//         if (tarea === null || typeof tarea === 'undefined') {
//             throw new Error('La tarea no puede ser null o undefined');
//         }
//         const nuevoNodo = new NodoTarea(tarea);
//         if (this.primero === null) {
//             this.primero = nuevoNodo;
//             this.ultimo = nuevoNodo;
//         } else {
//             this.ultimo.siguiente = nuevoNodo;
//             this.ultimo = nuevoNodo;
//         }
//     }

//     eliminarTarea(tarea) {
//         let anterior = null;
//         let actual = this.primero;

//         while (actual !== null) {
//             if (actual.tarea.id === tarea.id) { // Comparar por id
//                 if (anterior === null) {
//                     this.primero = actual.siguiente;
//                 } else {
//                     anterior.siguiente = actual.siguiente;
//                 }
//                 if (actual === this.ultimo) {
//                     this.ultimo = anterior;
//                 }
//                 break;
//             }
//             anterior = actual;
//             actual = actual.siguiente;
//         }
//     }

//     mostrarTareasPendientes() {
//         let actual = this.primero;
//         while (actual !== null) {
//             console.log(actual.tarea);
//             actual = actual.siguiente;
//         }
//     }

//     buscarTarea(tarea) {
//         let actual = this.primero;
//         while (actual !== null) {
//             if (actual.tarea.id === tarea.id) {
//                 return actual.tarea;
//             }
//             actual = actual.siguiente;
//         }
//         return null;
//     }
// }

// // Cola de tareas en progreso
// class NodoCola {
//     constructor(tarea) {
//         this.tarea = tarea;
//         this.siguiente = null;
//     }
// }

// class ColaTareasEnProgreso {
//     constructor() {
//         this.primero = null;
//         this.ultimo = null;
//     }

//     encolarTarea(tarea) {
//         const nuevoNodo = new NodoCola(tarea);
//         if (this.primero === null) {
//             this.primero = nuevoNodo;
//             this.ultimo = nuevoNodo;
//         } else {
//             this.ultimo.siguiente = nuevoNodo;
//             this.ultimo = nuevoNodo;
//         }
//     }

//     desencolarTarea() {
//         if (this.primero === null) {
//             return null;
//         }

//         const tareaDesencolada = this.primero.tarea;
//         this.primero = this.primero.siguiente;
//         if (this.primero === null) {
//             this.ultimo = null;
//         }
//         return tareaDesencolada;
//     }

//     mostrarTareasEnProgreso() {
//         let actual = this.primero;
//         while (actual !== null) {
//             console.log(actual.tarea);
//             actual = actual.siguiente;
//         }
//     }

//     buscarTarea(tarea) {
//         let actual = this.primero;
//         while (actual !== null) {
//             if (actual.tarea.id === tarea.id) {
//                 return actual.tarea;
//             }
//             actual = actual.siguiente;
//         }
//         return null;
//     }
// }
// // Función para generar tareas aleatorias
// function generarTareasAleatorias(cantidad) {
//     const tareas = [];

//     for (let i = 0; i < cantidad; i++) {
//         const id = i + 1;
//         const descripcion = `Tarea ${id}`;
//         const prioridad = Math.floor(Math.random() * 4) + 1; // Prioridad entre 1 y 4
//         const estado = Math.random() < 0.5 ? "pendiente" : "en curso";

//         const tarea = new Tarea(id, descripcion, prioridad, estado);
//         tareas.push(tarea);
//     }

//     return tareas;
// }

// // Ejemplo de uso


// // Generar 10 tareas aleatorias
// const tareasGeneradas = generarTareasAleatorias(10);

// // Agregar tareas a la lista de pendientes
// tareasGeneradas.forEach(tarea => listaTareasPendientes.agregarTarea(tarea));

// // Mostrar tareas pendientes
// console.log("Tareas Pendientes:");
// listaTareasPendientes.mostrarTareasPendientes();

// // Mover una tarea a la cola de tareas en progreso
// listaTareasPendientes.eliminarTarea(tareaAMover);
// colaTareasEnProgreso.encolarTarea(tareaAMover);

// // Mostrar tareas en progreso
// console.log("Tareas en Progreso:");
// colaTareasEnProgreso.mostrarTareasEnProgreso();

// // 1.3 Árbol binario de búsqueda de tareas
// class NodoArbol {
//     constructor(tarea) {
//         this.tarea = tarea;
//         this.izquierdo = null;
//         this.derecho = null;
//     }
// }

// class ArbolBinarioBusqueda {
//     constructor() {
//         this.raiz = null;
//     }

//     insertarTarea(tarea) {
//         const nuevoNodo = new NodoArbol(tarea);

//         if (this.raiz === null) {
//             this.raiz = nuevoNodo;
//             return;
//         }

//         let actual = this.raiz;
//         while (true) {
//             if (tarea.prioridad < actual.tarea.prioridad) {
//                 if (actual.izquierdo === null) {
//                     actual.izquierdo = nuevoNodo;
//                     return;
//                 }
//                 actual = actual.izquierdo;
//             } else {
//                 if (actual.derecho === null) {
//                     actual.derecho = nuevoNodo;
//                     return;
//                 }
//                 actual = actual.derecho;
//             }
//         }
//     }

//     buscarTarea(tarea) {
//         let actual = this.raiz;
//         while (actual !== null) {
//             if (actual.tarea.id === tarea.id) {
//                 return actual.tarea;
//             } else if (tarea.prioridad < actual.tarea.prioridad) {
//                 actual = actual.izquierdo;
//             } else {
//                 actual = actual.derecho;
//             }
//         }
//         return null;
//     }

//     eliminarTarea(tarea) {
//         this.raiz = this._eliminarTarea(this.raiz, tarea);
//     }

//     _eliminarTarea(nodo, tarea) {
//         if (nodo === null) {
//             return null;
//         }

//         if (tarea.id === nodo.tarea.id) {
//             // Si el nodo es una hoja, simplemente lo eliminamos
//             if (nodo.izquierdo === null && nodo.derecho === null) {
//                 return null;
//             }

//             // Si el nodo tiene un solo hijo, lo promovemos como reemplazo
//             if (nodo.izquierdo === null) {
//                 return nodo.derecho;
//             } else if (nodo.derecho === null) {
//                 return nodo.izquierdo;
//             }

//             // Si el nodo tiene dos hijos, encontramos el sucesor in-orden y lo promovemos
//             const sucesor = this._buscarSucesor(nodo.derecho);
//             nodo.tarea = sucesor.tarea;
//             nodo.derecho = this._eliminarTarea(nodo.derecho, sucesor.tarea);
//             return nodo;
//         } else if (tarea.prioridad < nodo.tarea.prioridad) {
//             nodo.izquierdo = this._eliminarTarea(nodo.izquierdo, tarea);
//             return nodo;
//         } else {
//             nodo.derecho = this._eliminarTarea(nodo.derecho, tarea);
//             return nodo;
//         }
//     }

//     _buscarSucesor(nodo) {
//         let actual = nodo;
//         while (actual.izquierdo !== null) {
//             actual = actual.izquierdo;
//         }
//         return actual;
//     }

//     recorrerInorden(callback) {
//         this._recorrerInorden(this.raiz, callback);
//     }

//     _recorrerInorden(nodo, callback) {
//         if (nodo !== null) {
//             this._recorrerInorden(nodo.izquierdo, callback);
//             callback(nodo.tarea);
//             this._recorrerInorden(nodo.derecho, callback);
//         }
//     }
// }

// // 1.4 Grafo simple, dependencia entre tareas
// class NodoGrafo {
//     constructor(tarea) {
//         this.tarea = tarea;
//         this.vecinos = [];
//     }

//     agregarVecino(vecino) {
//         this.vecinos.push(vecino);
//     }
// }

// class Grafo {
//     constructor() {
//         this.nodos = [];
//     }

//     agregarNodo(nodo) {
//         this.nodos.push(nodo);
//     }

//     agregarDependencia(nodoOrigen, nodoDestino) {
//         nodoOrigen.agregarVecino(nodoDestino);
//     }
// }

// // 2.1 Implementar algoritmo
// // Crear instancias de las estructuras
// const listaTareasPendientes = new ListaTareasPendientes();
// const arbolBinarioBusqueda = new ArbolBinarioBusqueda();
// const colaTareasEnProgreso = new ColaTareasEnProgreso();
// const pilaTareasCompletadas = new ColaTareasEnProgreso(); // Suponiendo que es una pila, pero usando cola por simplicidad

// // Añadir una nueva tarea
// const tareaNueva = new Tarea(4, "Revisar correo electrónico", 2, "pendiente");
// listaTareasPendientes.agregarTarea(tareaNueva);
// arbolBinarioBusqueda.insertarTarea(tareaNueva);

// // Mover tareas entre estructuras
// const tareaAMover = new Tarea(2, "Comprar víveres", 2, "pendiente");
// listaTareasPendientes.eliminarTarea(tareaAMover);
// colaTareasEnProgreso.encolarTarea(tareaAMover);

// tareaAMover.estado = "en progreso";

// // Buscar tareas por id
// const tareaABuscar = new Tarea(2, "Comprar víveres", 2, "pendiente");
// const tareaEncontradaEnLista = listaTareasPendientes.buscarTarea(tareaABuscar);
// const tareaEncontradaEnArbol = arbolBinarioBusqueda.buscarTarea(tareaABuscar);
// const tareaEncontradaEnCola = colaTareasEnProgreso.buscarTarea(tareaABuscar);
// const tareaEncontradaEnPila = pilaTareasCompletadas.buscarTarea(tareaABuscar);

// console.log(tareaEncontradaEnLista); // Imprime la tarea encontrada en la lista de pendientes (si existe)
// console.log(tareaEncontradaEnArbol); // Imprime la tarea encontrada en el árbol binario de búsqueda (si existe)
// console.log(tareaEncontradaEnCola); // Imprime la tarea encontrada en la cola de tareas en progreso (si existe)
// console.log(tareaEncontradaEnPila); // Imprime la tarea encontrada en la pila de tareas completadas (si existe)

// // Ordenar tareas por prioridad
// console.log("Lista de tareas pendientes:");
// listaTareasPendientes.mostrarTareasPendientes();

// console.log("\nRecorrer árbol binario de búsqueda en orden:");
// arbolBinarioBusqueda.recorrerInorden(tarea => console.log(tarea));

// console.log("\nCola de tareas en progreso:");
// colaTareasEnProgreso.mostrarTareasEnProgreso();

// // 2.2 Función ciclos de dependencias usando un grafo
// function detectarCiclosEnDependencias(grafo) {
//     const visitados = new Set(); // Conjunto para almacenar nodos visitados
//     const pila = []; // Pila para el recorrido en profundidad

//     // Función recursiva para el recorrido en profundidad
//     function dfs(nodoActual) {
//         if (visitados.has(nodoActual)) {
//             // Si se encuentra un nodo ya visitado, hay un ciclo
//             return true;
//         }

//         visitados.add(nodoActual); // Marcar el nodo como visitado
//         pila.push(nodoActual); // Agregar el nodo a la pila

//         for (const vecino of nodoActual.vecinos) {
//             if (dfs(vecino)) {
//                 return true;
//             }
//         }

//         pila.pop(); // Eliminar el nodo de la pila al salir del subárbol
//         visitados.delete(nodoActual); // Desmarcar el nodo como visitado

//         return false;
//     }

//     // Iniciar el recorrido desde cada nodo
//     for (const nodo of grafo.nodos) {
//         if (!visitados.has(nodo) && dfs(nodo)) {
//             return true; // Se encontró un ciclo
//         }
//     }

//     return false; // No se encontraron ciclos
// }

// // Uso del grafo
// const grafoTareas = new Grafo();

// const tarea1 = new Tarea(1, "Terminar el informe", 1, "pendiente");
// const tarea2 = new Tarea(2, "Comprar víveres", 2, "pendiente");
// const tarea3 = new Tarea(3, "Preparar la presentación", 3, "pendiente");

// grafoTareas.agregarNodo(new NodoGrafo(tarea1));
// grafoTareas.agregarNodo(new NodoGrafo(tarea2));
// grafoTareas.agregarNodo(new NodoGrafo(tarea3));

// grafoTareas.agregarDependencia(grafoTareas.nodos[1], grafoTareas.nodos[0]); // Tarea 2 depende de Tarea 1
// grafoTareas.agregarDependencia(grafoTareas.nodos[2], grafoTareas.nodos[0]); // Tarea 3 depende de Tarea 1
// grafoTareas.agregarDependencia(grafoTareas.nodos[0], grafoTareas.nodos[1]); // Se crea un ciclo (Tarea 1 depende de Tarea 2)

// const hayCiclo = detectarCiclosEnDependencias(grafoTareas);
// console.log("¿Hay ciclos en las dependencias?", hayCiclo); // Imprime "true" porque hay un ciclo

// // 3.0 Análisis y comparación
// // 3.1 Conjunto de Datos de prueba
// function generarTareasAleatorias(cantidad) {
//     const tareas = [];

//     for (let i = 0; i < cantidad; i++) {
//         const id = i + 1;
//         const descripcion = `Tarea ${id}`;
//         const prioridad = Math.floor(Math.random() * 4) + 1; // Prioridad entre 1 y 4
//         const estado = Math.random() < 0.5 ? "pendiente" : "en curso";

//         const tarea = new Tarea(id, descripcion, prioridad, estado);
//         tareas.push(tarea);
//     }

//     return tareas;
// }

// // Uso
// const tareas100 = generarTareasAleatorias(100);
// const tareas1000 = generarTareasAleatorias(1000);
// const tareas10000 = generarTareasAleatorias(10000);

// console.log(`Tareas generadas (100): `, tareas100.slice(0, 10));
// console.log(`Tareas generadas (1000): `, tareas1000.slice(0, 10));
// console.log(`Tareas generadas (10000): `, tareas10000.slice(0, 10));