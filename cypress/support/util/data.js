import { fakerPT_BR as faker } from '@faker-js/faker'

class Data {

    fullNameUser() {
        return `${this.nameUser()} ${this.lastNameUser()}`
    }

    nameUser() {
        return faker.person.firstName()
    }

    lastNameUser() {
        return faker.person.lastName()
    }

    emailUser() {
        return faker.internet.email()
    }

    passwordUser() {
        return 'test@' + faker.number.int(99999999)
    }

    titleUser() {
        const titles = ['Mr', 'Mrs']
        return faker.helpers.arrayElement(titles)
    }

    birhdayUser() {
        return faker.number.int({ min: 1, max: 28 }).toString()
    }

    birthmonthUser() {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ]

        return faker.helpers.arrayElement(months)
    }

    birthyearUser() {
        return faker.number.int({
            min: 1900,
            max: 2021
        }).toString()
    }

    addressUser() {
        return faker.location.streetAddress()
    }

    address2User() {
        return faker.location.secondaryAddress()
    }

    countryUser() {

        const country = [
            'India',
            'United States',
            'Canada',
            'Australia',
            'Israel',
            'New Zealand',
            'Singapore'
        ]

        return faker.helpers.arrayElement(country)
    }

    stateUser() {
        return faker.location.state()
    }

    cityUser() {
        return faker.location.city()
    }

    zipCodUser() {
        return faker.location.zipCode()
    }

    mobileUser() {
        return faker.phone.number()
    }
}

export default new Data()