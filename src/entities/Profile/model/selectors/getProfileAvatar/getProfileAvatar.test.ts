import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileAvatar } from 'entities/Profile/model/selectors/getProfileAvatar/getProfileAvatar';

describe('getProfileAvatar test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: { avatar: 'some url' },
            },
        };
        expect(getProfileAvatar(state as StateSchema))
            .toBe('some url');
    });
});
