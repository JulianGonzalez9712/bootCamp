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

     //Método para eliminar tarea de lista
     eliminarTarea (id) {
        if(!this.head) return null; //Lista vacía

        if(this.head.tarea.id == id) { //Si la tarea esta en la cabeza
            this.head = this.head.next;
            return;
        }

        let actual = this.head;
        while (actual.next) {
            if(actual.next.tarea.id === id) { //Encontrar y eliminar
                actual.next = actual.next.next;
                return;
            }
            actual = actual.next;
        }
    }




    // mostrarLista(item=null) {
    //     if (item){
    //         nuevaTarea.agregarFinal(item);
    //     }
    //     let actual = this.head;
    //     let output = '';
    //     while (actual !== null) {
    //         output += `${actual.tarea} -> `;
    //         actual = actual.next;
    //     }
    //     output += 'null';
    //     console.log(output);
    // }

    //  //Método para eliminar tarea de lista
    //  eliminarTarea (id) {
    //     if(!this.head) return null; //Lista vacía

    //     if(this.head.tarea.id == id) { //Si la tarea esta en la cabeza
    //         this.head = this.head.next;
    //         return;
    //     }

    //     let actual = this.head;
    //     while (actual.next) {
    //         if(actual.next.tarea.id === id) { //Encontrar y eliminar
    //             actual.next = actual.next.next;
    //             return;
    //         }
    //         actual = actual.next;
    //     }
    // }


}


let nuevaTarea = new ListaEnlazada();
nuevaTarea.agregarFinal("Correr");


console.log(nuevaTarea);
nuevaTarea.mostrarTareas();


