import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileReadonly test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual([ValidateProfileError.SERVER_ERROR,
                ValidateProfileError.INCORRECT_USER_DATA]);
    });
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema))
            .toEqual(undefined);
    });
});
