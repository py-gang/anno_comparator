/* export const bindAll = (context, methodNames) =>
  methodNames.forEach(methodName => this[methodName] = this[methodName].bind(context)); */

export function bindAll(context, methodNames) {
  console.log('bindAll', methodNames, context);
  methodNames.forEach(methodName => this[methodName] = this[methodName].bind(context));
}
