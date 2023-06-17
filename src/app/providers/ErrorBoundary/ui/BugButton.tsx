import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErorrBoundary
export const BugButton: FC = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const throwBug = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={throwBug}>{t('Throw Error')}</Button>
    );
};
