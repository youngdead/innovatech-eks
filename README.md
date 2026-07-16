# Dashboard de Gestión de Despachos - Innovatech Chile

Este repositorio contiene el código fuente, la infraestructura y la configuración de Integración y Entrega Continua (CI/CD) para el proyecto **Dashboard de Gestión de Despachos**, desarrollado para automatizar el proceso de administración de órdenes de compra y despachos en un entorno cloud utilizando Amazon Web Services (AWS).

La solución fue desarrollada bajo una arquitectura basada en contenedores y desplegada sobre Kubernetes mediante Amazon Elastic Kubernetes Service (EKS), permitiendo una administración eficiente, escalabilidad y automatización completa del proceso de despliegue.

---

# Arquitectura del Sistema

La aplicación está compuesta por los siguientes componentes:

## Frontend

Aplicación desarrollada con **React + Vite**, que proporciona una interfaz web moderna para la administración de órdenes de compra y despachos.

Entre sus principales funcionalidades se encuentran:

- Consulta de órdenes de compra.
- Gestión de despachos.
- Visualización de información del sistema.
- Interfaz responsive para usuarios administrativos.

---

## Backend

El backend fue desarrollado utilizando **Spring Boot (Java)** y expone una API REST encargada de procesar toda la lógica de negocio del sistema.

Entre sus responsabilidades se encuentran:

- Administración de órdenes.
- Generación de despachos.
- Comunicación con la base de datos.
- Exposición de servicios REST.

---

## Base de Datos

La persistencia de la información se realiza mediante **MySQL**, almacenando los registros de órdenes de compra, productos y despachos generados por el sistema.

---

## Infraestructura Cloud

Toda la aplicación fue desplegada sobre **Amazon Web Services (AWS)** utilizando los siguientes servicios:

- Amazon Elastic Kubernetes Service (EKS)
- Amazon Elastic Container Registry (ECR)
- Amazon EC2
- Amazon VPC
- Application Load Balancer
- IAM
- Amazon CloudWatch

La infraestructura permite ejecutar la aplicación en un entorno altamente disponible y preparado para escalar según la demanda.

---

# Tecnologías Utilizadas

- React
- Vite
- Spring Boot
- Java
- MySQL
- Docker
- Docker Compose
- Kubernetes
- Amazon EKS
- Amazon ECR
- GitHub Actions
- AWS CloudWatch

---

# Contenerización

Cada componente de la aplicación fue contenerizado mediante Docker.

Se desarrollaron imágenes independientes para:

- Frontend
- Backend
- Base de Datos

Las imágenes son almacenadas automáticamente en **Amazon Elastic Container Registry (ECR)** y posteriormente utilizadas por Kubernetes para desplegar la aplicación.

---

# Docker Compose

Para facilitar el desarrollo local se utilizaron archivos Docker Compose que permiten levantar automáticamente todos los servicios necesarios.

Los archivos incluidos son:

- docker-compose.front.yml
- docker-compose.back.yml
- docker-compose.data.yml

Con ello es posible iniciar el entorno completo de desarrollo mediante Docker.

---

# Pipeline CI/CD

El proyecto incorpora un pipeline completamente automatizado mediante **GitHub Actions**.

Cada vez que se realiza un **Push** sobre la rama principal, se ejecutan automáticamente las siguientes etapas:

1. Checkout del repositorio.
2. Configuración de credenciales AWS.
3. Compilación del proyecto.
4. Construcción de imágenes Docker.
5. Publicación de imágenes en Amazon ECR.
6. Actualización del clúster Amazon EKS.
7. Reinicio de los Deployments para utilizar la nueva versión.

Este flujo permite reducir tareas manuales y asegurar que la aplicación desplegada siempre corresponda a la última versión del repositorio.

---

# Infraestructura AWS

La solución fue desplegada utilizando una arquitectura basada en Kubernetes.

La infraestructura está compuesta por:

- Amazon VPC
- Subredes
- Security Groups
- Amazon EKS
- Amazon EC2
- Amazon ECR
- Application Load Balancer
- Amazon CloudWatch

Los recursos se comunican mediante redes privadas y únicamente se exponen los servicios necesarios al exterior.

---

# Monitoreo

La infraestructura es monitoreada mediante **Amazon CloudWatch**, permitiendo visualizar métricas relacionadas con:

- Utilización de CPU.
- Uso de memoria.
- Tráfico de red.
- Estado de los Pods.
- Estado de los nodos.
- Logs del sistema.

Esto facilita detectar problemas de rendimiento y supervisar el estado general del clúster.

---

# Seguridad

Para mejorar la seguridad del entorno se implementaron diversas buenas prácticas:

- Uso de imágenes Docker oficiales y optimizadas.
- Exposición únicamente de los puertos necesarios.
- Gestión segura de credenciales mediante GitHub Secrets.
- Control de acceso mediante IAM.
- Restricción de tráfico utilizando Security Groups.
- Despliegue sobre infraestructura administrada por Amazon EKS.

---

# Variables de Entorno

El pipeline utiliza GitHub Secrets para almacenar de forma segura las credenciales necesarias para acceder a AWS.

Los principales Secrets configurados son:

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_SESSION_TOKEN
- AWS_REGION
- EKS_CLUSTER_NAME
- EKS_NAMESPACE
- ECR_FRONTEND
- ECR_BACKEND

---

# Requisitos

Para ejecutar el proyecto localmente es necesario contar con:

- Docker Desktop
- Docker Compose
- Java 17 o superior
- Node.js
- AWS CLI
- kubectl

---

# Despliegue

Una vez ejecutado correctamente el pipeline de GitHub Actions, es posible verificar el estado de la infraestructura mediante:

```bash
kubectl get pods -n tienda

kubectl get svc -n tienda

kubectl get deployments -n tienda
```

---

# Funcionalidades

El Dashboard permite:

- Consultar órdenes de compra.
- Generar despachos.
- Revisar despachos realizados.
- Administrar información del sistema.
- Visualizar datos de manera centralizada.

---

# Autores

- Benjamín Vásquez
- Dante Muñoz

---

# Proyecto Académico

Asignatura: **Introducción a Herramientas DevOps**

Proyecto desarrollado utilizando contenedores Docker, Kubernetes, Amazon Web Services y GitHub Actions como parte de la implementación de una solución de Integración y Entrega Continua (CI/CD).
