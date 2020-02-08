import 'source-map-support/register';
import { Logger } from '@gillisandrew/utils';
const { FN_NAME, FN_PROJECT, FN_ENVIRONMENT } = process.env;

const log = new Logger({
    function: {
        name: FN_NAME,
        project: FN_PROJECT,
        environment: FN_ENVIRONMENT,
    },
});

log.setNamespace(FN_NAME || '');

export const handler = async (event: {}): Promise<{ message: string; event: {} }> => {
    log.debug({
        message: 'A DEBUG message.',
        reference: 'handler',
    });
    log.info({
        message: 'A INFO message.',
        reference: 'handler',
    });
    log.warn({
        message: 'A WARN message.',
        reference: 'handler',
    });
    log.error({
        message: 'A ERROR message.',
        reference: 'handler',
    });
    return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
