import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileValidateErrors, ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 22,
    country: Country.UKRAINE,
    lastname: 'test lastname',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result)
            .toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result)
            .toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('with incorrenct age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result)
            .toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
    test('with incorrenct country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result)
            .toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('without currency', async () => {
        const result = validateProfileData({});

        expect(result)
            .toEqual([

                ValidateProfileError.INCORRECT_USER_DATA,
                ValidateProfileError.INCORRECT_AGE,
                ValidateProfileError.INCORRECT_COUNTRY,
                ValidateProfileError.INCORRECT_CURRENCY,
                ValidateProfileError.INCORRECT_CITY,

            ]);
    });
});
