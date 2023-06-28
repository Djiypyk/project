import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsComments?.error || '';
export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => (
    state?.articleDetailsComments?.isLoading || false
);
