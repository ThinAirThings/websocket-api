import { ApiGatewayManagementApiClient } from "@aws-sdk/client-apigatewaymanagementapi";
import { APIGatewayProxyEvent } from "aws-lambda";
declare const sendMessageToClient: <P extends Record<string, any>>(apigw_client: ApiGatewayManagementApiClient, connectionId: string, messageId: string, status: 'RUNNING' | 'ERROR' | 'COMPLETE', payload: P) => Promise<void>;
declare const createSendMessageToClient: ({ apigw_client, connectionId, messageId }: {
    apigw_client: ApiGatewayManagementApiClient;
    connectionId: string;
    messageId: string;
}) => <P extends Record<string, any>>(status: 'RUNNING' | 'ERROR' | 'COMPLETE', payload: P) => Promise<void>;
export declare const wsRequestHandler: (handler: ({}: {
    [key: string]: any;
    sendMessageToClient: ReturnType<typeof createSendMessageToClient>;
}) => Promise<void>) => (event: APIGatewayProxyEvent) => Promise<void>;
export {};
