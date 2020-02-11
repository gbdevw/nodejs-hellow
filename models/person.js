/**
 * @swagger
 *  components:
 *    schemas:
 *      Person:
 *        type: object
 *        required:
 *          - firstName
 *          - lastName
 *        properties:
 *          firstName:
 *            type: string
 *            description: First name of the person
 *          lastName:
 *            type: string
 *            description: Last name of the person
 *        example:
 *           firstName: Guillaume
 *           lastName: Braibant
 */
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
}

module.exports = Person;