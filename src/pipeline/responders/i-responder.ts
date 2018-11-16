import IContext from "../schema/context/i-context"

/**
 * Events attached to pipeline components are handled by 'handlers'.
 * The 'handlers' may use 'responders' when they will to send information
 * to the client (typically a success/fail notification). All responders
 * should implement this interface. Responder implementations are normally
 * stored in ./src/api/responders
 */
export default interface IResponder {
  handle(err: any, context: IContext): void
}
