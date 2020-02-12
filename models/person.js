/**
 * @swagger
 * definitions:
 *   Person:
 *     required:
 *       - firstName
 *       - lastName
 *     properties:
 *       firstName:
 *         type: string
 *         description: First name of the person
 *       lastName:
 *         type: string
 *         description: Last name of the person
 */
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
}

module.exports = Person;