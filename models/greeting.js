/**
 * @swagger
 * definitions:
 *  Greeting:
*     required:
*       - greeting
*     properties:
*       greeting:
*         type: string
*         description: Greeting message
 */
class Greeting {
    constructor(firstName, lastName, uuid) {
        this.greeting = 'Hello ' + firstName + ' ' + lastName + ' from ' + uuid + ' !';
    }
}

module.exports = Greeting;