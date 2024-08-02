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
    constructor(id, descripcion, prioridad, estado){
        this.id = id;
        this.descripcion = descripcion;
        this.prioridad = prioridad;
        this.estado = estado;
    }
}


class Nodo {
    constructor(tarea) {
        this.tarea = tarea;
        this.next = null;
    }
}

// Definición de la lista enlazada
class ListaEnlazada {
    constructor() {
        this.head = null;
    }

    // Método para insertar un nueva tarea al final de la lista
    agregarFinal(tarea) {
        let newNodo = new Nodo(tarea);
        if (!this.head) {
            this.head = newNodo;
            return;
        }
        let actual = this.head;
        while (actual.next !== null) {
            actual = actual.next;
        }
        actual.next = newNodo;
    }

    // Método para imprimir los elementos de la lista enlazada

    mostrarTareas() {
        let actual = this.head;
        while (actual) {
            console.log(actual.tarea);
            actual = actual.next;
      
        }
    }


}


class Cola{
    constructor() {
        this.tareas = []; //Array donde están las tareas
    }

    //Método agregar tarea
    agregarCola(tarea) {
        this.tareas.push(tarea);
    }

    // Método eliminar y retornar la primera tarea de Cola
    quitarCola() {
        return this.tareas.shift();
    }

    //Método para mostrar tareas
    mostrarTareas(){
        this.tareas.forEach(tarea => console.log(tarea));
    }

}

//Clase PiLa para gestionar tareas ya hechas
class Pila {
    constructor(){
        this.tareas = []; //Array para almacenar
    }

    //Método para agregar tarea a pila
    apilar(tarea) {
        this.tareas.push(tarea);
    }

    //Método que elimina y retorna la última tarea
    desapilar() {
        return this.tareas.pop();
    }

    //Método para mostrar todas las tareas en pila
    mostrarTareas() {
        this.tareas.forEach(tarea => console.log(tarea));
    }
}


class NodoArbol {
    constructor(tarea) {
        this.tarea = tarea;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class BusquedaArbol {
    constructor() {
        this.raiz = null;
    }
    
    insertarTarea(tarea) {
        const nuevoNodo = new NodoArbol(tarea);

        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;
        while (true) {
            if (tarea.prioridad < actual.tarea.prioridad) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo;
            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return;
                }
                actual = actual.derecho;
            }
        }

    }



    
}




