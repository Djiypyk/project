import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm test', () => {
    test('should return true', () => {
        const data = {
            username: 'username',
            lastname: 'lastname',
            first: 'first',
            age: 18,
            country: Country.UKRAINE,
            currency: Currency.BLR,
            city: 'city',
            avatar: '',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema))
            .toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema))
            .toEqual(undefined);
    });
});
