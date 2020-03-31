import { toStringTag } from './toStringTag';

export function toprimitive(): string {
    return {}.toString.call({ [Symbol.toStringTag]: toStringTag });
}
