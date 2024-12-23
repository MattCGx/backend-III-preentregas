import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: ID del usuario
 *                   first_name:
 *                     type: string
 *                     description: Nombre del usuario
 *                   last_name:
 *                     type: string
 *                     description: Apellido del usuario
 *                   email:
 *                     type: string
 *                     description: Email del usuario
 */
router.get('/', usersController.getAllUsers);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Correo electrónico único del usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario (será encriptada)
 *               role:
 *                 type: string
 *                 description: Rol del usuario (opcional, por defecto "user")
 *             example:
 *               first_name: Matt
 *               last_name: CGx
 *               email: MattCGx@example.com
 *               password: Matt123
 *               role: admin
 *     responses:
 *       201:
 *         description: Usuario creado
 *       400:
 *         description: Error en los datos ingresados
 *       500:
 *         description: Error del servidor
 */

router.post('/', usersController.createUser);

/**
 * @swagger
 * /users/{uid}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Datos del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID del usuario
 *                 first_name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 last_name:
 *                   type: string
 *                   description: Apellido del usuario
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/:uid', usersController.getUser);

/**
 * @swagger
 * /users/{uid}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *             example:
 *               first_name: Matt
 *               last_name: CGx
 *               email: mattcgx@example.com
 *     responses:
 *       200:
 *         description: Usuario actualizado
 *       400:
 *         description: Datos inválidos
 */
router.put('/:uid', usersController.updateUser);

/**
 * @swagger
 * /users/{uid}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/:uid', usersController.deleteUser);

export default router;