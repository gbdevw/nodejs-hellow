/**
 * @swagger
 *  components:
 *    schemas:
 *      Greeting:
 *        type: object
 *        required:
 *          - greeting
 *        properties:
 *          greeting:
 *            type: string
 *            description: Greeting message
 *        example:
 *           greeting: Hello guillaume Braibant from fdecfb7e-a10f-437f-bf3b-19f2a2a72b9b !
 */
class Greeting {
    constructor(firstName, lastName, uuid) {
        this.greeting = 'Hello ' + firstName + ' ' + lastName + ' from ' + uuid + ' !';
    }
}

module.exports = Greeting;