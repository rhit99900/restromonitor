
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Restaurants
 * 
 */
export type Restaurants = $Result.DefaultSelection<Prisma.$RestaurantsPayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model RestaurantPlatform
 * 
 */
export type RestaurantPlatform = $Result.DefaultSelection<Prisma.$RestaurantPlatformPayload>
/**
 * Model PlatformRestaurantAvailability
 * 
 */
export type PlatformRestaurantAvailability = $Result.DefaultSelection<Prisma.$PlatformRestaurantAvailabilityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurants.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurants.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.restaurants`: Exposes CRUD operations for the **Restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.RestaurantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantPlatform`: Exposes CRUD operations for the **RestaurantPlatform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantPlatforms
    * const restaurantPlatforms = await prisma.restaurantPlatform.findMany()
    * ```
    */
  get restaurantPlatform(): Prisma.RestaurantPlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformRestaurantAvailability`: Exposes CRUD operations for the **PlatformRestaurantAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformRestaurantAvailabilities
    * const platformRestaurantAvailabilities = await prisma.platformRestaurantAvailability.findMany()
    * ```
    */
  get platformRestaurantAvailability(): Prisma.PlatformRestaurantAvailabilityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Restaurants: 'Restaurants',
    Platform: 'Platform',
    RestaurantPlatform: 'RestaurantPlatform',
    PlatformRestaurantAvailability: 'PlatformRestaurantAvailability'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "restaurants" | "platform" | "restaurantPlatform" | "platformRestaurantAvailability"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Restaurants: {
        payload: Prisma.$RestaurantsPayload<ExtArgs>
        fields: Prisma.RestaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findFirst: {
            args: Prisma.RestaurantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          findMany: {
            args: Prisma.RestaurantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>[]
          }
          create: {
            args: Prisma.RestaurantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          createMany: {
            args: Prisma.RestaurantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>[]
          }
          delete: {
            args: Prisma.RestaurantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          update: {
            args: Prisma.RestaurantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.RestaurantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantsCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      RestaurantPlatform: {
        payload: Prisma.$RestaurantPlatformPayload<ExtArgs>
        fields: Prisma.RestaurantPlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantPlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantPlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          findFirst: {
            args: Prisma.RestaurantPlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantPlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          findMany: {
            args: Prisma.RestaurantPlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>[]
          }
          create: {
            args: Prisma.RestaurantPlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          createMany: {
            args: Prisma.RestaurantPlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestaurantPlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>[]
          }
          delete: {
            args: Prisma.RestaurantPlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          update: {
            args: Prisma.RestaurantPlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantPlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantPlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestaurantPlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>[]
          }
          upsert: {
            args: Prisma.RestaurantPlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPlatformPayload>
          }
          aggregate: {
            args: Prisma.RestaurantPlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantPlatform>
          }
          groupBy: {
            args: Prisma.RestaurantPlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantPlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantPlatformCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantPlatformCountAggregateOutputType> | number
          }
        }
      }
      PlatformRestaurantAvailability: {
        payload: Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>
        fields: Prisma.PlatformRestaurantAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformRestaurantAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformRestaurantAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.PlatformRestaurantAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformRestaurantAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          findMany: {
            args: Prisma.PlatformRestaurantAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>[]
          }
          create: {
            args: Prisma.PlatformRestaurantAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          createMany: {
            args: Prisma.PlatformRestaurantAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformRestaurantAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.PlatformRestaurantAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          update: {
            args: Prisma.PlatformRestaurantAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.PlatformRestaurantAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformRestaurantAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformRestaurantAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.PlatformRestaurantAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformRestaurantAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.PlatformRestaurantAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformRestaurantAvailability>
          }
          groupBy: {
            args: Prisma.PlatformRestaurantAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformRestaurantAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformRestaurantAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformRestaurantAvailabilityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    restaurants?: RestaurantsOmit
    platform?: PlatformOmit
    restaurantPlatform?: RestaurantPlatformOmit
    platformRestaurantAvailability?: PlatformRestaurantAvailabilityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestaurantsCountOutputType
   */

  export type RestaurantsCountOutputType = {
    listings: number
  }

  export type RestaurantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | RestaurantsCountOutputTypeCountListingsArgs
  }

  // Custom InputTypes
  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantsCountOutputType
     */
    select?: RestaurantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantPlatformWhereInput
  }


  /**
   * Count Type PlatformCountOutputType
   */

  export type PlatformCountOutputType = {
    restaurants: number
  }

  export type PlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | PlatformCountOutputTypeCountRestaurantsArgs
  }

  // Custom InputTypes
  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformCountOutputType
     */
    select?: PlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatformCountOutputType without action
   */
  export type PlatformCountOutputTypeCountRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantPlatformWhereInput
  }


  /**
   * Count Type RestaurantPlatformCountOutputType
   */

  export type RestaurantPlatformCountOutputType = {
    platform_availability: number
  }

  export type RestaurantPlatformCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platform_availability?: boolean | RestaurantPlatformCountOutputTypeCountPlatform_availabilityArgs
  }

  // Custom InputTypes
  /**
   * RestaurantPlatformCountOutputType without action
   */
  export type RestaurantPlatformCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatformCountOutputType
     */
    select?: RestaurantPlatformCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantPlatformCountOutputType without action
   */
  export type RestaurantPlatformCountOutputTypeCountPlatform_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformRestaurantAvailabilityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsAvgAggregateOutputType = {
    id: number | null
  }

  export type RestaurantsSumAggregateOutputType = {
    id: number | null
  }

  export type RestaurantsMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    brand: string | null
    city: string | null
    expected_open_time: string | null
    expected_close_time: string | null
    created_at: Date | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    brand: string | null
    city: string | null
    expected_open_time: string | null
    expected_close_time: string | null
    created_at: Date | null
  }

  export type RestaurantsCountAggregateOutputType = {
    id: number
    name: number
    address: number
    brand: number
    city: number
    expected_open_time: number
    expected_close_time: number
    created_at: number
    _all: number
  }


  export type RestaurantsAvgAggregateInputType = {
    id?: true
  }

  export type RestaurantsSumAggregateInputType = {
    id?: true
  }

  export type RestaurantsMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    brand?: true
    city?: true
    expected_open_time?: true
    expected_close_time?: true
    created_at?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    brand?: true
    city?: true
    expected_open_time?: true
    expected_close_time?: true
    created_at?: true
  }

  export type RestaurantsCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    brand?: true
    city?: true
    expected_open_time?: true
    expected_close_time?: true
    created_at?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to aggregate.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type RestaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantsWhereInput
    orderBy?: RestaurantsOrderByWithAggregationInput | RestaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: RestaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _avg?: RestaurantsAvgAggregateInputType
    _sum?: RestaurantsSumAggregateInputType
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    id: number
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at: Date
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends RestaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    brand?: boolean
    city?: boolean
    expected_open_time?: boolean
    expected_close_time?: boolean
    created_at?: boolean
    listings?: boolean | Restaurants$listingsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>

  export type RestaurantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    brand?: boolean
    city?: boolean
    expected_open_time?: boolean
    expected_close_time?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["restaurants"]>

  export type RestaurantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    brand?: boolean
    city?: boolean
    expected_open_time?: boolean
    expected_close_time?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["restaurants"]>

  export type RestaurantsSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    brand?: boolean
    city?: boolean
    expected_open_time?: boolean
    expected_close_time?: boolean
    created_at?: boolean
  }

  export type RestaurantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "brand" | "city" | "expected_open_time" | "expected_close_time" | "created_at", ExtArgs["result"]["restaurants"]>
  export type RestaurantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Restaurants$listingsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestaurantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurants"
    objects: {
      listings: Prisma.$RestaurantPlatformPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      brand: string
      city: string
      expected_open_time: string
      expected_close_time: string
      created_at: Date
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }

  type RestaurantsGetPayload<S extends boolean | null | undefined | RestaurantsDefaultArgs> = $Result.GetResult<Prisma.$RestaurantsPayload, S>

  type RestaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface RestaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurants'], meta: { name: 'Restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {RestaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantsFindUniqueArgs>(args: SelectSubset<T, RestaurantsFindUniqueArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantsFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantsFindFirstArgs>(args?: SelectSubset<T, RestaurantsFindFirstArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantsFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantsFindManyArgs>(args?: SelectSubset<T, RestaurantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurants.
     * @param {RestaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
     */
    create<T extends RestaurantsCreateArgs>(args: SelectSubset<T, RestaurantsCreateArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantsCreateManyArgs>(args?: SelectSubset<T, RestaurantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Restaurants and returns the data saved in the database.
     * @param {RestaurantsCreateManyAndReturnArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Restaurants and only return the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantsCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Restaurants.
     * @param {RestaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
     */
    delete<T extends RestaurantsDeleteArgs>(args: SelectSubset<T, RestaurantsDeleteArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurants.
     * @param {RestaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantsUpdateArgs>(args: SelectSubset<T, RestaurantsUpdateArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantsDeleteManyArgs>(args?: SelectSubset<T, RestaurantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantsUpdateManyArgs>(args: SelectSubset<T, RestaurantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants and returns the data updated in the database.
     * @param {RestaurantsUpdateManyAndReturnArgs} args - Arguments to update many Restaurants.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Restaurants and only return the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantsUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Restaurants.
     * @param {RestaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantsUpsertArgs>(args: SelectSubset<T, RestaurantsUpsertArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantsCountArgs>(
      args?: Subset<T, RestaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantsGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurants model
   */
  readonly fields: RestaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Restaurants$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurants$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Restaurants model
   */
  interface RestaurantsFieldRefs {
    readonly id: FieldRef<"Restaurants", 'Int'>
    readonly name: FieldRef<"Restaurants", 'String'>
    readonly address: FieldRef<"Restaurants", 'String'>
    readonly brand: FieldRef<"Restaurants", 'String'>
    readonly city: FieldRef<"Restaurants", 'String'>
    readonly expected_open_time: FieldRef<"Restaurants", 'String'>
    readonly expected_close_time: FieldRef<"Restaurants", 'String'>
    readonly created_at: FieldRef<"Restaurants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurants findUnique
   */
  export type RestaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants findUniqueOrThrow
   */
  export type RestaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants findFirst
   */
  export type RestaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants findFirstOrThrow
   */
  export type RestaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants findMany
   */
  export type RestaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantsOrderByWithRelationInput | RestaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * Restaurants create
   */
  export type RestaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurants.
     */
    data: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
  }

  /**
   * Restaurants createMany
   */
  export type RestaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantsCreateManyInput | RestaurantsCreateManyInput[]
  }

  /**
   * Restaurants createManyAndReturn
   */
  export type RestaurantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantsCreateManyInput | RestaurantsCreateManyInput[]
  }

  /**
   * Restaurants update
   */
  export type RestaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurants.
     */
    data: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
    /**
     * Choose, which Restaurants to update.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants updateMany
   */
  export type RestaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantsUpdateManyMutationInput, RestaurantsUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantsWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurants updateManyAndReturn
   */
  export type RestaurantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantsUpdateManyMutationInput, RestaurantsUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantsWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurants upsert
   */
  export type RestaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurants to update in case it exists.
     */
    where: RestaurantsWhereUniqueInput
    /**
     * In case the Restaurants found by the `where` argument doesn't exist, create a new Restaurants with this data.
     */
    create: XOR<RestaurantsCreateInput, RestaurantsUncheckedCreateInput>
    /**
     * In case the Restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantsUpdateInput, RestaurantsUncheckedUpdateInput>
  }

  /**
   * Restaurants delete
   */
  export type RestaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
    /**
     * Filter which Restaurants to delete.
     */
    where: RestaurantsWhereUniqueInput
  }

  /**
   * Restaurants deleteMany
   */
  export type RestaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantsWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurants.listings
   */
  export type Restaurants$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    where?: RestaurantPlatformWhereInput
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    cursor?: RestaurantPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantPlatformScalarFieldEnum | RestaurantPlatformScalarFieldEnum[]
  }

  /**
   * Restaurants without action
   */
  export type RestaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurants
     */
    select?: RestaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurants
     */
    omit?: RestaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantsInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformAvgAggregateOutputType = {
    id: number | null
  }

  export type PlatformSumAggregateOutputType = {
    id: number | null
  }

  export type PlatformMinAggregateOutputType = {
    id: number | null
    name: string | null
    platform_uri: string | null
    created_at: Date | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: number | null
    name: string | null
    platform_uri: string | null
    created_at: Date | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    platform_uri: number
    created_at: number
    _all: number
  }


  export type PlatformAvgAggregateInputType = {
    id?: true
  }

  export type PlatformSumAggregateInputType = {
    id?: true
  }

  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
    platform_uri?: true
    created_at?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
    platform_uri?: true
    created_at?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    platform_uri?: true
    created_at?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _avg?: PlatformAvgAggregateInputType
    _sum?: PlatformSumAggregateInputType
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: number
    name: string
    platform_uri: string
    created_at: Date
    _count: PlatformCountAggregateOutputType | null
    _avg: PlatformAvgAggregateOutputType | null
    _sum: PlatformSumAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform_uri?: boolean
    created_at?: boolean
    restaurants?: boolean | Platform$restaurantsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform_uri?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform_uri?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
    platform_uri?: boolean
    created_at?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "platform_uri" | "created_at", ExtArgs["result"]["platform"]>
  export type PlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurants?: boolean | Platform$restaurantsArgs<ExtArgs>
    _count?: boolean | PlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {
      restaurants: Prisma.$RestaurantPlatformPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      platform_uri: string
      created_at: Date
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurants<T extends Platform$restaurantsArgs<ExtArgs> = {}>(args?: Subset<T, Platform$restaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'Int'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly platform_uri: FieldRef<"Platform", 'String'>
    readonly created_at: FieldRef<"Platform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform.restaurants
   */
  export type Platform$restaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    where?: RestaurantPlatformWhereInput
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    cursor?: RestaurantPlatformWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantPlatformScalarFieldEnum | RestaurantPlatformScalarFieldEnum[]
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantPlatform
   */

  export type AggregateRestaurantPlatform = {
    _count: RestaurantPlatformCountAggregateOutputType | null
    _avg: RestaurantPlatformAvgAggregateOutputType | null
    _sum: RestaurantPlatformSumAggregateOutputType | null
    _min: RestaurantPlatformMinAggregateOutputType | null
    _max: RestaurantPlatformMaxAggregateOutputType | null
  }

  export type RestaurantPlatformAvgAggregateOutputType = {
    id: number | null
    restaurant_id: number | null
    platform_id: number | null
  }

  export type RestaurantPlatformSumAggregateOutputType = {
    id: number | null
    restaurant_id: number | null
    platform_id: number | null
  }

  export type RestaurantPlatformMinAggregateOutputType = {
    id: number | null
    restaurant_id: number | null
    platform_id: number | null
    restaurant_platform_uri: string | null
    created_at: Date | null
  }

  export type RestaurantPlatformMaxAggregateOutputType = {
    id: number | null
    restaurant_id: number | null
    platform_id: number | null
    restaurant_platform_uri: string | null
    created_at: Date | null
  }

  export type RestaurantPlatformCountAggregateOutputType = {
    id: number
    restaurant_id: number
    platform_id: number
    restaurant_platform_uri: number
    created_at: number
    _all: number
  }


  export type RestaurantPlatformAvgAggregateInputType = {
    id?: true
    restaurant_id?: true
    platform_id?: true
  }

  export type RestaurantPlatformSumAggregateInputType = {
    id?: true
    restaurant_id?: true
    platform_id?: true
  }

  export type RestaurantPlatformMinAggregateInputType = {
    id?: true
    restaurant_id?: true
    platform_id?: true
    restaurant_platform_uri?: true
    created_at?: true
  }

  export type RestaurantPlatformMaxAggregateInputType = {
    id?: true
    restaurant_id?: true
    platform_id?: true
    restaurant_platform_uri?: true
    created_at?: true
  }

  export type RestaurantPlatformCountAggregateInputType = {
    id?: true
    restaurant_id?: true
    platform_id?: true
    restaurant_platform_uri?: true
    created_at?: true
    _all?: true
  }

  export type RestaurantPlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantPlatform to aggregate.
     */
    where?: RestaurantPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantPlatforms to fetch.
     */
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantPlatforms
    **/
    _count?: true | RestaurantPlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantPlatformAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantPlatformSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantPlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantPlatformMaxAggregateInputType
  }

  export type GetRestaurantPlatformAggregateType<T extends RestaurantPlatformAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantPlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantPlatform[P]>
      : GetScalarType<T[P], AggregateRestaurantPlatform[P]>
  }




  export type RestaurantPlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantPlatformWhereInput
    orderBy?: RestaurantPlatformOrderByWithAggregationInput | RestaurantPlatformOrderByWithAggregationInput[]
    by: RestaurantPlatformScalarFieldEnum[] | RestaurantPlatformScalarFieldEnum
    having?: RestaurantPlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantPlatformCountAggregateInputType | true
    _avg?: RestaurantPlatformAvgAggregateInputType
    _sum?: RestaurantPlatformSumAggregateInputType
    _min?: RestaurantPlatformMinAggregateInputType
    _max?: RestaurantPlatformMaxAggregateInputType
  }

  export type RestaurantPlatformGroupByOutputType = {
    id: number
    restaurant_id: number
    platform_id: number
    restaurant_platform_uri: string
    created_at: Date
    _count: RestaurantPlatformCountAggregateOutputType | null
    _avg: RestaurantPlatformAvgAggregateOutputType | null
    _sum: RestaurantPlatformSumAggregateOutputType | null
    _min: RestaurantPlatformMinAggregateOutputType | null
    _max: RestaurantPlatformMaxAggregateOutputType | null
  }

  type GetRestaurantPlatformGroupByPayload<T extends RestaurantPlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantPlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantPlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantPlatformGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantPlatformGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantPlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurant_id?: boolean
    platform_id?: boolean
    restaurant_platform_uri?: boolean
    created_at?: boolean
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    platform_availability?: boolean | RestaurantPlatform$platform_availabilityArgs<ExtArgs>
    _count?: boolean | RestaurantPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantPlatform"]>

  export type RestaurantPlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurant_id?: boolean
    platform_id?: boolean
    restaurant_platform_uri?: boolean
    created_at?: boolean
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantPlatform"]>

  export type RestaurantPlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    restaurant_id?: boolean
    platform_id?: boolean
    restaurant_platform_uri?: boolean
    created_at?: boolean
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantPlatform"]>

  export type RestaurantPlatformSelectScalar = {
    id?: boolean
    restaurant_id?: boolean
    platform_id?: boolean
    restaurant_platform_uri?: boolean
    created_at?: boolean
  }

  export type RestaurantPlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "restaurant_id" | "platform_id" | "restaurant_platform_uri" | "created_at", ExtArgs["result"]["restaurantPlatform"]>
  export type RestaurantPlatformInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
    platform_availability?: boolean | RestaurantPlatform$platform_availabilityArgs<ExtArgs>
    _count?: boolean | RestaurantPlatformCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestaurantPlatformIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }
  export type RestaurantPlatformIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantsDefaultArgs<ExtArgs>
    platform?: boolean | PlatformDefaultArgs<ExtArgs>
  }

  export type $RestaurantPlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantPlatform"
    objects: {
      restaurant: Prisma.$RestaurantsPayload<ExtArgs>
      platform: Prisma.$PlatformPayload<ExtArgs>
      platform_availability: Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      restaurant_id: number
      platform_id: number
      restaurant_platform_uri: string
      created_at: Date
    }, ExtArgs["result"]["restaurantPlatform"]>
    composites: {}
  }

  type RestaurantPlatformGetPayload<S extends boolean | null | undefined | RestaurantPlatformDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPlatformPayload, S>

  type RestaurantPlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantPlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantPlatformCountAggregateInputType | true
    }

  export interface RestaurantPlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantPlatform'], meta: { name: 'RestaurantPlatform' } }
    /**
     * Find zero or one RestaurantPlatform that matches the filter.
     * @param {RestaurantPlatformFindUniqueArgs} args - Arguments to find a RestaurantPlatform
     * @example
     * // Get one RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantPlatformFindUniqueArgs>(args: SelectSubset<T, RestaurantPlatformFindUniqueArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestaurantPlatform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantPlatformFindUniqueOrThrowArgs} args - Arguments to find a RestaurantPlatform
     * @example
     * // Get one RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantPlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantPlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantPlatform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformFindFirstArgs} args - Arguments to find a RestaurantPlatform
     * @example
     * // Get one RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantPlatformFindFirstArgs>(args?: SelectSubset<T, RestaurantPlatformFindFirstArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantPlatform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformFindFirstOrThrowArgs} args - Arguments to find a RestaurantPlatform
     * @example
     * // Get one RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantPlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantPlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestaurantPlatforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantPlatforms
     * const restaurantPlatforms = await prisma.restaurantPlatform.findMany()
     * 
     * // Get first 10 RestaurantPlatforms
     * const restaurantPlatforms = await prisma.restaurantPlatform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantPlatformWithIdOnly = await prisma.restaurantPlatform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantPlatformFindManyArgs>(args?: SelectSubset<T, RestaurantPlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestaurantPlatform.
     * @param {RestaurantPlatformCreateArgs} args - Arguments to create a RestaurantPlatform.
     * @example
     * // Create one RestaurantPlatform
     * const RestaurantPlatform = await prisma.restaurantPlatform.create({
     *   data: {
     *     // ... data to create a RestaurantPlatform
     *   }
     * })
     * 
     */
    create<T extends RestaurantPlatformCreateArgs>(args: SelectSubset<T, RestaurantPlatformCreateArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestaurantPlatforms.
     * @param {RestaurantPlatformCreateManyArgs} args - Arguments to create many RestaurantPlatforms.
     * @example
     * // Create many RestaurantPlatforms
     * const restaurantPlatform = await prisma.restaurantPlatform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantPlatformCreateManyArgs>(args?: SelectSubset<T, RestaurantPlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestaurantPlatforms and returns the data saved in the database.
     * @param {RestaurantPlatformCreateManyAndReturnArgs} args - Arguments to create many RestaurantPlatforms.
     * @example
     * // Create many RestaurantPlatforms
     * const restaurantPlatform = await prisma.restaurantPlatform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestaurantPlatforms and only return the `id`
     * const restaurantPlatformWithIdOnly = await prisma.restaurantPlatform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestaurantPlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, RestaurantPlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestaurantPlatform.
     * @param {RestaurantPlatformDeleteArgs} args - Arguments to delete one RestaurantPlatform.
     * @example
     * // Delete one RestaurantPlatform
     * const RestaurantPlatform = await prisma.restaurantPlatform.delete({
     *   where: {
     *     // ... filter to delete one RestaurantPlatform
     *   }
     * })
     * 
     */
    delete<T extends RestaurantPlatformDeleteArgs>(args: SelectSubset<T, RestaurantPlatformDeleteArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestaurantPlatform.
     * @param {RestaurantPlatformUpdateArgs} args - Arguments to update one RestaurantPlatform.
     * @example
     * // Update one RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantPlatformUpdateArgs>(args: SelectSubset<T, RestaurantPlatformUpdateArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestaurantPlatforms.
     * @param {RestaurantPlatformDeleteManyArgs} args - Arguments to filter RestaurantPlatforms to delete.
     * @example
     * // Delete a few RestaurantPlatforms
     * const { count } = await prisma.restaurantPlatform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantPlatformDeleteManyArgs>(args?: SelectSubset<T, RestaurantPlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantPlatforms
     * const restaurantPlatform = await prisma.restaurantPlatform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantPlatformUpdateManyArgs>(args: SelectSubset<T, RestaurantPlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantPlatforms and returns the data updated in the database.
     * @param {RestaurantPlatformUpdateManyAndReturnArgs} args - Arguments to update many RestaurantPlatforms.
     * @example
     * // Update many RestaurantPlatforms
     * const restaurantPlatform = await prisma.restaurantPlatform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestaurantPlatforms and only return the `id`
     * const restaurantPlatformWithIdOnly = await prisma.restaurantPlatform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestaurantPlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, RestaurantPlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestaurantPlatform.
     * @param {RestaurantPlatformUpsertArgs} args - Arguments to update or create a RestaurantPlatform.
     * @example
     * // Update or create a RestaurantPlatform
     * const restaurantPlatform = await prisma.restaurantPlatform.upsert({
     *   create: {
     *     // ... data to create a RestaurantPlatform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantPlatform we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantPlatformUpsertArgs>(args: SelectSubset<T, RestaurantPlatformUpsertArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestaurantPlatforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformCountArgs} args - Arguments to filter RestaurantPlatforms to count.
     * @example
     * // Count the number of RestaurantPlatforms
     * const count = await prisma.restaurantPlatform.count({
     *   where: {
     *     // ... the filter for the RestaurantPlatforms we want to count
     *   }
     * })
    **/
    count<T extends RestaurantPlatformCountArgs>(
      args?: Subset<T, RestaurantPlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantPlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantPlatformAggregateArgs>(args: Subset<T, RestaurantPlatformAggregateArgs>): Prisma.PrismaPromise<GetRestaurantPlatformAggregateType<T>>

    /**
     * Group by RestaurantPlatform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantPlatformGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestaurantPlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantPlatformGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantPlatformGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestaurantPlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantPlatform model
   */
  readonly fields: RestaurantPlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantPlatform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantPlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantsDefaultArgs<ExtArgs>>): Prisma__RestaurantsClient<$Result.GetResult<Prisma.$RestaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform<T extends PlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlatformDefaultArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    platform_availability<T extends RestaurantPlatform$platform_availabilityArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantPlatform$platform_availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestaurantPlatform model
   */
  interface RestaurantPlatformFieldRefs {
    readonly id: FieldRef<"RestaurantPlatform", 'Int'>
    readonly restaurant_id: FieldRef<"RestaurantPlatform", 'Int'>
    readonly platform_id: FieldRef<"RestaurantPlatform", 'Int'>
    readonly restaurant_platform_uri: FieldRef<"RestaurantPlatform", 'String'>
    readonly created_at: FieldRef<"RestaurantPlatform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantPlatform findUnique
   */
  export type RestaurantPlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantPlatform to fetch.
     */
    where: RestaurantPlatformWhereUniqueInput
  }

  /**
   * RestaurantPlatform findUniqueOrThrow
   */
  export type RestaurantPlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantPlatform to fetch.
     */
    where: RestaurantPlatformWhereUniqueInput
  }

  /**
   * RestaurantPlatform findFirst
   */
  export type RestaurantPlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantPlatform to fetch.
     */
    where?: RestaurantPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantPlatforms to fetch.
     */
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantPlatforms.
     */
    cursor?: RestaurantPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantPlatforms.
     */
    distinct?: RestaurantPlatformScalarFieldEnum | RestaurantPlatformScalarFieldEnum[]
  }

  /**
   * RestaurantPlatform findFirstOrThrow
   */
  export type RestaurantPlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantPlatform to fetch.
     */
    where?: RestaurantPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantPlatforms to fetch.
     */
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantPlatforms.
     */
    cursor?: RestaurantPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantPlatforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantPlatforms.
     */
    distinct?: RestaurantPlatformScalarFieldEnum | RestaurantPlatformScalarFieldEnum[]
  }

  /**
   * RestaurantPlatform findMany
   */
  export type RestaurantPlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantPlatforms to fetch.
     */
    where?: RestaurantPlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantPlatforms to fetch.
     */
    orderBy?: RestaurantPlatformOrderByWithRelationInput | RestaurantPlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantPlatforms.
     */
    cursor?: RestaurantPlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantPlatforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantPlatforms.
     */
    skip?: number
    distinct?: RestaurantPlatformScalarFieldEnum | RestaurantPlatformScalarFieldEnum[]
  }

  /**
   * RestaurantPlatform create
   */
  export type RestaurantPlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantPlatform.
     */
    data: XOR<RestaurantPlatformCreateInput, RestaurantPlatformUncheckedCreateInput>
  }

  /**
   * RestaurantPlatform createMany
   */
  export type RestaurantPlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantPlatforms.
     */
    data: RestaurantPlatformCreateManyInput | RestaurantPlatformCreateManyInput[]
  }

  /**
   * RestaurantPlatform createManyAndReturn
   */
  export type RestaurantPlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * The data used to create many RestaurantPlatforms.
     */
    data: RestaurantPlatformCreateManyInput | RestaurantPlatformCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantPlatform update
   */
  export type RestaurantPlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantPlatform.
     */
    data: XOR<RestaurantPlatformUpdateInput, RestaurantPlatformUncheckedUpdateInput>
    /**
     * Choose, which RestaurantPlatform to update.
     */
    where: RestaurantPlatformWhereUniqueInput
  }

  /**
   * RestaurantPlatform updateMany
   */
  export type RestaurantPlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantPlatforms.
     */
    data: XOR<RestaurantPlatformUpdateManyMutationInput, RestaurantPlatformUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantPlatforms to update
     */
    where?: RestaurantPlatformWhereInput
    /**
     * Limit how many RestaurantPlatforms to update.
     */
    limit?: number
  }

  /**
   * RestaurantPlatform updateManyAndReturn
   */
  export type RestaurantPlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * The data used to update RestaurantPlatforms.
     */
    data: XOR<RestaurantPlatformUpdateManyMutationInput, RestaurantPlatformUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantPlatforms to update
     */
    where?: RestaurantPlatformWhereInput
    /**
     * Limit how many RestaurantPlatforms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestaurantPlatform upsert
   */
  export type RestaurantPlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantPlatform to update in case it exists.
     */
    where: RestaurantPlatformWhereUniqueInput
    /**
     * In case the RestaurantPlatform found by the `where` argument doesn't exist, create a new RestaurantPlatform with this data.
     */
    create: XOR<RestaurantPlatformCreateInput, RestaurantPlatformUncheckedCreateInput>
    /**
     * In case the RestaurantPlatform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantPlatformUpdateInput, RestaurantPlatformUncheckedUpdateInput>
  }

  /**
   * RestaurantPlatform delete
   */
  export type RestaurantPlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
    /**
     * Filter which RestaurantPlatform to delete.
     */
    where: RestaurantPlatformWhereUniqueInput
  }

  /**
   * RestaurantPlatform deleteMany
   */
  export type RestaurantPlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantPlatforms to delete
     */
    where?: RestaurantPlatformWhereInput
    /**
     * Limit how many RestaurantPlatforms to delete.
     */
    limit?: number
  }

  /**
   * RestaurantPlatform.platform_availability
   */
  export type RestaurantPlatform$platform_availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    where?: PlatformRestaurantAvailabilityWhereInput
    orderBy?: PlatformRestaurantAvailabilityOrderByWithRelationInput | PlatformRestaurantAvailabilityOrderByWithRelationInput[]
    cursor?: PlatformRestaurantAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatformRestaurantAvailabilityScalarFieldEnum | PlatformRestaurantAvailabilityScalarFieldEnum[]
  }

  /**
   * RestaurantPlatform without action
   */
  export type RestaurantPlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantPlatform
     */
    select?: RestaurantPlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantPlatform
     */
    omit?: RestaurantPlatformOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantPlatformInclude<ExtArgs> | null
  }


  /**
   * Model PlatformRestaurantAvailability
   */

  export type AggregatePlatformRestaurantAvailability = {
    _count: PlatformRestaurantAvailabilityCountAggregateOutputType | null
    _avg: PlatformRestaurantAvailabilityAvgAggregateOutputType | null
    _sum: PlatformRestaurantAvailabilitySumAggregateOutputType | null
    _min: PlatformRestaurantAvailabilityMinAggregateOutputType | null
    _max: PlatformRestaurantAvailabilityMaxAggregateOutputType | null
  }

  export type PlatformRestaurantAvailabilityAvgAggregateOutputType = {
    id: number | null
    restaurant_platform_id: number | null
  }

  export type PlatformRestaurantAvailabilitySumAggregateOutputType = {
    id: number | null
    restaurant_platform_id: number | null
  }

  export type PlatformRestaurantAvailabilityMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    restaurant_platform_id: number | null
    is_available: boolean | null
  }

  export type PlatformRestaurantAvailabilityMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    restaurant_platform_id: number | null
    is_available: boolean | null
  }

  export type PlatformRestaurantAvailabilityCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    restaurant_platform_id: number
    is_available: number
    _all: number
  }


  export type PlatformRestaurantAvailabilityAvgAggregateInputType = {
    id?: true
    restaurant_platform_id?: true
  }

  export type PlatformRestaurantAvailabilitySumAggregateInputType = {
    id?: true
    restaurant_platform_id?: true
  }

  export type PlatformRestaurantAvailabilityMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    restaurant_platform_id?: true
    is_available?: true
  }

  export type PlatformRestaurantAvailabilityMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    restaurant_platform_id?: true
    is_available?: true
  }

  export type PlatformRestaurantAvailabilityCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    restaurant_platform_id?: true
    is_available?: true
    _all?: true
  }

  export type PlatformRestaurantAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformRestaurantAvailability to aggregate.
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformRestaurantAvailabilities to fetch.
     */
    orderBy?: PlatformRestaurantAvailabilityOrderByWithRelationInput | PlatformRestaurantAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformRestaurantAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformRestaurantAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformRestaurantAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformRestaurantAvailabilities
    **/
    _count?: true | PlatformRestaurantAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatformRestaurantAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatformRestaurantAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformRestaurantAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformRestaurantAvailabilityMaxAggregateInputType
  }

  export type GetPlatformRestaurantAvailabilityAggregateType<T extends PlatformRestaurantAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformRestaurantAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformRestaurantAvailability[P]>
      : GetScalarType<T[P], AggregatePlatformRestaurantAvailability[P]>
  }




  export type PlatformRestaurantAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformRestaurantAvailabilityWhereInput
    orderBy?: PlatformRestaurantAvailabilityOrderByWithAggregationInput | PlatformRestaurantAvailabilityOrderByWithAggregationInput[]
    by: PlatformRestaurantAvailabilityScalarFieldEnum[] | PlatformRestaurantAvailabilityScalarFieldEnum
    having?: PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformRestaurantAvailabilityCountAggregateInputType | true
    _avg?: PlatformRestaurantAvailabilityAvgAggregateInputType
    _sum?: PlatformRestaurantAvailabilitySumAggregateInputType
    _min?: PlatformRestaurantAvailabilityMinAggregateInputType
    _max?: PlatformRestaurantAvailabilityMaxAggregateInputType
  }

  export type PlatformRestaurantAvailabilityGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    restaurant_platform_id: number
    is_available: boolean
    _count: PlatformRestaurantAvailabilityCountAggregateOutputType | null
    _avg: PlatformRestaurantAvailabilityAvgAggregateOutputType | null
    _sum: PlatformRestaurantAvailabilitySumAggregateOutputType | null
    _min: PlatformRestaurantAvailabilityMinAggregateOutputType | null
    _max: PlatformRestaurantAvailabilityMaxAggregateOutputType | null
  }

  type GetPlatformRestaurantAvailabilityGroupByPayload<T extends PlatformRestaurantAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformRestaurantAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformRestaurantAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformRestaurantAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformRestaurantAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type PlatformRestaurantAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    restaurant_platform_id?: boolean
    is_available?: boolean
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformRestaurantAvailability"]>

  export type PlatformRestaurantAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    restaurant_platform_id?: boolean
    is_available?: boolean
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformRestaurantAvailability"]>

  export type PlatformRestaurantAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    restaurant_platform_id?: boolean
    is_available?: boolean
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platformRestaurantAvailability"]>

  export type PlatformRestaurantAvailabilitySelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    restaurant_platform_id?: boolean
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "restaurant_platform_id" | "is_available", ExtArgs["result"]["platformRestaurantAvailability"]>
  export type PlatformRestaurantAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }
  export type PlatformRestaurantAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }
  export type PlatformRestaurantAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant_platform?: boolean | RestaurantPlatformDefaultArgs<ExtArgs>
  }

  export type $PlatformRestaurantAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformRestaurantAvailability"
    objects: {
      restaurant_platform: Prisma.$RestaurantPlatformPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date
      updated_at: Date
      restaurant_platform_id: number
      is_available: boolean
    }, ExtArgs["result"]["platformRestaurantAvailability"]>
    composites: {}
  }

  type PlatformRestaurantAvailabilityGetPayload<S extends boolean | null | undefined | PlatformRestaurantAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload, S>

  type PlatformRestaurantAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformRestaurantAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformRestaurantAvailabilityCountAggregateInputType | true
    }

  export interface PlatformRestaurantAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformRestaurantAvailability'], meta: { name: 'PlatformRestaurantAvailability' } }
    /**
     * Find zero or one PlatformRestaurantAvailability that matches the filter.
     * @param {PlatformRestaurantAvailabilityFindUniqueArgs} args - Arguments to find a PlatformRestaurantAvailability
     * @example
     * // Get one PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformRestaurantAvailabilityFindUniqueArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformRestaurantAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformRestaurantAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a PlatformRestaurantAvailability
     * @example
     * // Get one PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformRestaurantAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformRestaurantAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityFindFirstArgs} args - Arguments to find a PlatformRestaurantAvailability
     * @example
     * // Get one PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformRestaurantAvailabilityFindFirstArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityFindFirstArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformRestaurantAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityFindFirstOrThrowArgs} args - Arguments to find a PlatformRestaurantAvailability
     * @example
     * // Get one PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformRestaurantAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformRestaurantAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformRestaurantAvailabilities
     * const platformRestaurantAvailabilities = await prisma.platformRestaurantAvailability.findMany()
     * 
     * // Get first 10 PlatformRestaurantAvailabilities
     * const platformRestaurantAvailabilities = await prisma.platformRestaurantAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformRestaurantAvailabilityWithIdOnly = await prisma.platformRestaurantAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformRestaurantAvailabilityFindManyArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformRestaurantAvailability.
     * @param {PlatformRestaurantAvailabilityCreateArgs} args - Arguments to create a PlatformRestaurantAvailability.
     * @example
     * // Create one PlatformRestaurantAvailability
     * const PlatformRestaurantAvailability = await prisma.platformRestaurantAvailability.create({
     *   data: {
     *     // ... data to create a PlatformRestaurantAvailability
     *   }
     * })
     * 
     */
    create<T extends PlatformRestaurantAvailabilityCreateArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityCreateArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformRestaurantAvailabilities.
     * @param {PlatformRestaurantAvailabilityCreateManyArgs} args - Arguments to create many PlatformRestaurantAvailabilities.
     * @example
     * // Create many PlatformRestaurantAvailabilities
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformRestaurantAvailabilityCreateManyArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformRestaurantAvailabilities and returns the data saved in the database.
     * @param {PlatformRestaurantAvailabilityCreateManyAndReturnArgs} args - Arguments to create many PlatformRestaurantAvailabilities.
     * @example
     * // Create many PlatformRestaurantAvailabilities
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformRestaurantAvailabilities and only return the `id`
     * const platformRestaurantAvailabilityWithIdOnly = await prisma.platformRestaurantAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformRestaurantAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformRestaurantAvailability.
     * @param {PlatformRestaurantAvailabilityDeleteArgs} args - Arguments to delete one PlatformRestaurantAvailability.
     * @example
     * // Delete one PlatformRestaurantAvailability
     * const PlatformRestaurantAvailability = await prisma.platformRestaurantAvailability.delete({
     *   where: {
     *     // ... filter to delete one PlatformRestaurantAvailability
     *   }
     * })
     * 
     */
    delete<T extends PlatformRestaurantAvailabilityDeleteArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityDeleteArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformRestaurantAvailability.
     * @param {PlatformRestaurantAvailabilityUpdateArgs} args - Arguments to update one PlatformRestaurantAvailability.
     * @example
     * // Update one PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformRestaurantAvailabilityUpdateArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityUpdateArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformRestaurantAvailabilities.
     * @param {PlatformRestaurantAvailabilityDeleteManyArgs} args - Arguments to filter PlatformRestaurantAvailabilities to delete.
     * @example
     * // Delete a few PlatformRestaurantAvailabilities
     * const { count } = await prisma.platformRestaurantAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformRestaurantAvailabilityDeleteManyArgs>(args?: SelectSubset<T, PlatformRestaurantAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformRestaurantAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformRestaurantAvailabilities
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformRestaurantAvailabilityUpdateManyArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformRestaurantAvailabilities and returns the data updated in the database.
     * @param {PlatformRestaurantAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many PlatformRestaurantAvailabilities.
     * @example
     * // Update many PlatformRestaurantAvailabilities
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformRestaurantAvailabilities and only return the `id`
     * const platformRestaurantAvailabilityWithIdOnly = await prisma.platformRestaurantAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformRestaurantAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformRestaurantAvailability.
     * @param {PlatformRestaurantAvailabilityUpsertArgs} args - Arguments to update or create a PlatformRestaurantAvailability.
     * @example
     * // Update or create a PlatformRestaurantAvailability
     * const platformRestaurantAvailability = await prisma.platformRestaurantAvailability.upsert({
     *   create: {
     *     // ... data to create a PlatformRestaurantAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformRestaurantAvailability we want to update
     *   }
     * })
     */
    upsert<T extends PlatformRestaurantAvailabilityUpsertArgs>(args: SelectSubset<T, PlatformRestaurantAvailabilityUpsertArgs<ExtArgs>>): Prisma__PlatformRestaurantAvailabilityClient<$Result.GetResult<Prisma.$PlatformRestaurantAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformRestaurantAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityCountArgs} args - Arguments to filter PlatformRestaurantAvailabilities to count.
     * @example
     * // Count the number of PlatformRestaurantAvailabilities
     * const count = await prisma.platformRestaurantAvailability.count({
     *   where: {
     *     // ... the filter for the PlatformRestaurantAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends PlatformRestaurantAvailabilityCountArgs>(
      args?: Subset<T, PlatformRestaurantAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformRestaurantAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformRestaurantAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformRestaurantAvailabilityAggregateArgs>(args: Subset<T, PlatformRestaurantAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetPlatformRestaurantAvailabilityAggregateType<T>>

    /**
     * Group by PlatformRestaurantAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformRestaurantAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformRestaurantAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformRestaurantAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: PlatformRestaurantAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformRestaurantAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformRestaurantAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformRestaurantAvailability model
   */
  readonly fields: PlatformRestaurantAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformRestaurantAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformRestaurantAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant_platform<T extends RestaurantPlatformDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantPlatformDefaultArgs<ExtArgs>>): Prisma__RestaurantPlatformClient<$Result.GetResult<Prisma.$RestaurantPlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformRestaurantAvailability model
   */
  interface PlatformRestaurantAvailabilityFieldRefs {
    readonly id: FieldRef<"PlatformRestaurantAvailability", 'Int'>
    readonly created_at: FieldRef<"PlatformRestaurantAvailability", 'DateTime'>
    readonly updated_at: FieldRef<"PlatformRestaurantAvailability", 'DateTime'>
    readonly restaurant_platform_id: FieldRef<"PlatformRestaurantAvailability", 'Int'>
    readonly is_available: FieldRef<"PlatformRestaurantAvailability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PlatformRestaurantAvailability findUnique
   */
  export type PlatformRestaurantAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformRestaurantAvailability to fetch.
     */
    where: PlatformRestaurantAvailabilityWhereUniqueInput
  }

  /**
   * PlatformRestaurantAvailability findUniqueOrThrow
   */
  export type PlatformRestaurantAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformRestaurantAvailability to fetch.
     */
    where: PlatformRestaurantAvailabilityWhereUniqueInput
  }

  /**
   * PlatformRestaurantAvailability findFirst
   */
  export type PlatformRestaurantAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformRestaurantAvailability to fetch.
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformRestaurantAvailabilities to fetch.
     */
    orderBy?: PlatformRestaurantAvailabilityOrderByWithRelationInput | PlatformRestaurantAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformRestaurantAvailabilities.
     */
    cursor?: PlatformRestaurantAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformRestaurantAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformRestaurantAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformRestaurantAvailabilities.
     */
    distinct?: PlatformRestaurantAvailabilityScalarFieldEnum | PlatformRestaurantAvailabilityScalarFieldEnum[]
  }

  /**
   * PlatformRestaurantAvailability findFirstOrThrow
   */
  export type PlatformRestaurantAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformRestaurantAvailability to fetch.
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformRestaurantAvailabilities to fetch.
     */
    orderBy?: PlatformRestaurantAvailabilityOrderByWithRelationInput | PlatformRestaurantAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformRestaurantAvailabilities.
     */
    cursor?: PlatformRestaurantAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformRestaurantAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformRestaurantAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformRestaurantAvailabilities.
     */
    distinct?: PlatformRestaurantAvailabilityScalarFieldEnum | PlatformRestaurantAvailabilityScalarFieldEnum[]
  }

  /**
   * PlatformRestaurantAvailability findMany
   */
  export type PlatformRestaurantAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which PlatformRestaurantAvailabilities to fetch.
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformRestaurantAvailabilities to fetch.
     */
    orderBy?: PlatformRestaurantAvailabilityOrderByWithRelationInput | PlatformRestaurantAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformRestaurantAvailabilities.
     */
    cursor?: PlatformRestaurantAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformRestaurantAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformRestaurantAvailabilities.
     */
    skip?: number
    distinct?: PlatformRestaurantAvailabilityScalarFieldEnum | PlatformRestaurantAvailabilityScalarFieldEnum[]
  }

  /**
   * PlatformRestaurantAvailability create
   */
  export type PlatformRestaurantAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a PlatformRestaurantAvailability.
     */
    data: XOR<PlatformRestaurantAvailabilityCreateInput, PlatformRestaurantAvailabilityUncheckedCreateInput>
  }

  /**
   * PlatformRestaurantAvailability createMany
   */
  export type PlatformRestaurantAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformRestaurantAvailabilities.
     */
    data: PlatformRestaurantAvailabilityCreateManyInput | PlatformRestaurantAvailabilityCreateManyInput[]
  }

  /**
   * PlatformRestaurantAvailability createManyAndReturn
   */
  export type PlatformRestaurantAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformRestaurantAvailabilities.
     */
    data: PlatformRestaurantAvailabilityCreateManyInput | PlatformRestaurantAvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlatformRestaurantAvailability update
   */
  export type PlatformRestaurantAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a PlatformRestaurantAvailability.
     */
    data: XOR<PlatformRestaurantAvailabilityUpdateInput, PlatformRestaurantAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which PlatformRestaurantAvailability to update.
     */
    where: PlatformRestaurantAvailabilityWhereUniqueInput
  }

  /**
   * PlatformRestaurantAvailability updateMany
   */
  export type PlatformRestaurantAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformRestaurantAvailabilities.
     */
    data: XOR<PlatformRestaurantAvailabilityUpdateManyMutationInput, PlatformRestaurantAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which PlatformRestaurantAvailabilities to update
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * Limit how many PlatformRestaurantAvailabilities to update.
     */
    limit?: number
  }

  /**
   * PlatformRestaurantAvailability updateManyAndReturn
   */
  export type PlatformRestaurantAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update PlatformRestaurantAvailabilities.
     */
    data: XOR<PlatformRestaurantAvailabilityUpdateManyMutationInput, PlatformRestaurantAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which PlatformRestaurantAvailabilities to update
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * Limit how many PlatformRestaurantAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlatformRestaurantAvailability upsert
   */
  export type PlatformRestaurantAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the PlatformRestaurantAvailability to update in case it exists.
     */
    where: PlatformRestaurantAvailabilityWhereUniqueInput
    /**
     * In case the PlatformRestaurantAvailability found by the `where` argument doesn't exist, create a new PlatformRestaurantAvailability with this data.
     */
    create: XOR<PlatformRestaurantAvailabilityCreateInput, PlatformRestaurantAvailabilityUncheckedCreateInput>
    /**
     * In case the PlatformRestaurantAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformRestaurantAvailabilityUpdateInput, PlatformRestaurantAvailabilityUncheckedUpdateInput>
  }

  /**
   * PlatformRestaurantAvailability delete
   */
  export type PlatformRestaurantAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which PlatformRestaurantAvailability to delete.
     */
    where: PlatformRestaurantAvailabilityWhereUniqueInput
  }

  /**
   * PlatformRestaurantAvailability deleteMany
   */
  export type PlatformRestaurantAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformRestaurantAvailabilities to delete
     */
    where?: PlatformRestaurantAvailabilityWhereInput
    /**
     * Limit how many PlatformRestaurantAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * PlatformRestaurantAvailability without action
   */
  export type PlatformRestaurantAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformRestaurantAvailability
     */
    select?: PlatformRestaurantAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformRestaurantAvailability
     */
    omit?: PlatformRestaurantAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformRestaurantAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RestaurantsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    brand: 'brand',
    city: 'city',
    expected_open_time: 'expected_open_time',
    expected_close_time: 'expected_close_time',
    created_at: 'created_at'
  };

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    platform_uri: 'platform_uri',
    created_at: 'created_at'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const RestaurantPlatformScalarFieldEnum: {
    id: 'id',
    restaurant_id: 'restaurant_id',
    platform_id: 'platform_id',
    restaurant_platform_uri: 'restaurant_platform_uri',
    created_at: 'created_at'
  };

  export type RestaurantPlatformScalarFieldEnum = (typeof RestaurantPlatformScalarFieldEnum)[keyof typeof RestaurantPlatformScalarFieldEnum]


  export const PlatformRestaurantAvailabilityScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    restaurant_platform_id: 'restaurant_platform_id',
    is_available: 'is_available'
  };

  export type PlatformRestaurantAvailabilityScalarFieldEnum = (typeof PlatformRestaurantAvailabilityScalarFieldEnum)[keyof typeof PlatformRestaurantAvailabilityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RestaurantsWhereInput = {
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    id?: IntFilter<"Restaurants"> | number
    name?: StringFilter<"Restaurants"> | string
    address?: StringFilter<"Restaurants"> | string
    brand?: StringFilter<"Restaurants"> | string
    city?: StringFilter<"Restaurants"> | string
    expected_open_time?: StringFilter<"Restaurants"> | string
    expected_close_time?: StringFilter<"Restaurants"> | string
    created_at?: DateTimeFilter<"Restaurants"> | Date | string
    listings?: RestaurantPlatformListRelationFilter
  }

  export type RestaurantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    brand?: SortOrder
    city?: SortOrder
    expected_open_time?: SortOrder
    expected_close_time?: SortOrder
    created_at?: SortOrder
    listings?: RestaurantPlatformOrderByRelationAggregateInput
  }

  export type RestaurantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RestaurantsWhereInput | RestaurantsWhereInput[]
    OR?: RestaurantsWhereInput[]
    NOT?: RestaurantsWhereInput | RestaurantsWhereInput[]
    address?: StringFilter<"Restaurants"> | string
    brand?: StringFilter<"Restaurants"> | string
    city?: StringFilter<"Restaurants"> | string
    expected_open_time?: StringFilter<"Restaurants"> | string
    expected_close_time?: StringFilter<"Restaurants"> | string
    created_at?: DateTimeFilter<"Restaurants"> | Date | string
    listings?: RestaurantPlatformListRelationFilter
  }, "id" | "name">

  export type RestaurantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    brand?: SortOrder
    city?: SortOrder
    expected_open_time?: SortOrder
    expected_close_time?: SortOrder
    created_at?: SortOrder
    _count?: RestaurantsCountOrderByAggregateInput
    _avg?: RestaurantsAvgOrderByAggregateInput
    _max?: RestaurantsMaxOrderByAggregateInput
    _min?: RestaurantsMinOrderByAggregateInput
    _sum?: RestaurantsSumOrderByAggregateInput
  }

  export type RestaurantsScalarWhereWithAggregatesInput = {
    AND?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    OR?: RestaurantsScalarWhereWithAggregatesInput[]
    NOT?: RestaurantsScalarWhereWithAggregatesInput | RestaurantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Restaurants"> | number
    name?: StringWithAggregatesFilter<"Restaurants"> | string
    address?: StringWithAggregatesFilter<"Restaurants"> | string
    brand?: StringWithAggregatesFilter<"Restaurants"> | string
    city?: StringWithAggregatesFilter<"Restaurants"> | string
    expected_open_time?: StringWithAggregatesFilter<"Restaurants"> | string
    expected_close_time?: StringWithAggregatesFilter<"Restaurants"> | string
    created_at?: DateTimeWithAggregatesFilter<"Restaurants"> | Date | string
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: IntFilter<"Platform"> | number
    name?: StringFilter<"Platform"> | string
    platform_uri?: StringFilter<"Platform"> | string
    created_at?: DateTimeFilter<"Platform"> | Date | string
    restaurants?: RestaurantPlatformListRelationFilter
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    platform_uri?: SortOrder
    created_at?: SortOrder
    restaurants?: RestaurantPlatformOrderByRelationAggregateInput
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    platform_uri?: StringFilter<"Platform"> | string
    created_at?: DateTimeFilter<"Platform"> | Date | string
    restaurants?: RestaurantPlatformListRelationFilter
  }, "id" | "name">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    platform_uri?: SortOrder
    created_at?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _avg?: PlatformAvgOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
    _sum?: PlatformSumOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platform"> | number
    name?: StringWithAggregatesFilter<"Platform"> | string
    platform_uri?: StringWithAggregatesFilter<"Platform"> | string
    created_at?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
  }

  export type RestaurantPlatformWhereInput = {
    AND?: RestaurantPlatformWhereInput | RestaurantPlatformWhereInput[]
    OR?: RestaurantPlatformWhereInput[]
    NOT?: RestaurantPlatformWhereInput | RestaurantPlatformWhereInput[]
    id?: IntFilter<"RestaurantPlatform"> | number
    restaurant_id?: IntFilter<"RestaurantPlatform"> | number
    platform_id?: IntFilter<"RestaurantPlatform"> | number
    restaurant_platform_uri?: StringFilter<"RestaurantPlatform"> | string
    created_at?: DateTimeFilter<"RestaurantPlatform"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, RestaurantsWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    platform_availability?: PlatformRestaurantAvailabilityListRelationFilter
  }

  export type RestaurantPlatformOrderByWithRelationInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
    restaurant_platform_uri?: SortOrder
    created_at?: SortOrder
    restaurant?: RestaurantsOrderByWithRelationInput
    platform?: PlatformOrderByWithRelationInput
    platform_availability?: PlatformRestaurantAvailabilityOrderByRelationAggregateInput
  }

  export type RestaurantPlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restaurant_id_platform_id?: RestaurantPlatformRestaurant_idPlatform_idCompoundUniqueInput
    AND?: RestaurantPlatformWhereInput | RestaurantPlatformWhereInput[]
    OR?: RestaurantPlatformWhereInput[]
    NOT?: RestaurantPlatformWhereInput | RestaurantPlatformWhereInput[]
    restaurant_id?: IntFilter<"RestaurantPlatform"> | number
    platform_id?: IntFilter<"RestaurantPlatform"> | number
    restaurant_platform_uri?: StringFilter<"RestaurantPlatform"> | string
    created_at?: DateTimeFilter<"RestaurantPlatform"> | Date | string
    restaurant?: XOR<RestaurantsScalarRelationFilter, RestaurantsWhereInput>
    platform?: XOR<PlatformScalarRelationFilter, PlatformWhereInput>
    platform_availability?: PlatformRestaurantAvailabilityListRelationFilter
  }, "id" | "restaurant_id_platform_id">

  export type RestaurantPlatformOrderByWithAggregationInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
    restaurant_platform_uri?: SortOrder
    created_at?: SortOrder
    _count?: RestaurantPlatformCountOrderByAggregateInput
    _avg?: RestaurantPlatformAvgOrderByAggregateInput
    _max?: RestaurantPlatformMaxOrderByAggregateInput
    _min?: RestaurantPlatformMinOrderByAggregateInput
    _sum?: RestaurantPlatformSumOrderByAggregateInput
  }

  export type RestaurantPlatformScalarWhereWithAggregatesInput = {
    AND?: RestaurantPlatformScalarWhereWithAggregatesInput | RestaurantPlatformScalarWhereWithAggregatesInput[]
    OR?: RestaurantPlatformScalarWhereWithAggregatesInput[]
    NOT?: RestaurantPlatformScalarWhereWithAggregatesInput | RestaurantPlatformScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestaurantPlatform"> | number
    restaurant_id?: IntWithAggregatesFilter<"RestaurantPlatform"> | number
    platform_id?: IntWithAggregatesFilter<"RestaurantPlatform"> | number
    restaurant_platform_uri?: StringWithAggregatesFilter<"RestaurantPlatform"> | string
    created_at?: DateTimeWithAggregatesFilter<"RestaurantPlatform"> | Date | string
  }

  export type PlatformRestaurantAvailabilityWhereInput = {
    AND?: PlatformRestaurantAvailabilityWhereInput | PlatformRestaurantAvailabilityWhereInput[]
    OR?: PlatformRestaurantAvailabilityWhereInput[]
    NOT?: PlatformRestaurantAvailabilityWhereInput | PlatformRestaurantAvailabilityWhereInput[]
    id?: IntFilter<"PlatformRestaurantAvailability"> | number
    created_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    updated_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    restaurant_platform_id?: IntFilter<"PlatformRestaurantAvailability"> | number
    is_available?: BoolFilter<"PlatformRestaurantAvailability"> | boolean
    restaurant_platform?: XOR<RestaurantPlatformScalarRelationFilter, RestaurantPlatformWhereInput>
  }

  export type PlatformRestaurantAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    restaurant_platform_id?: SortOrder
    is_available?: SortOrder
    restaurant_platform?: RestaurantPlatformOrderByWithRelationInput
  }

  export type PlatformRestaurantAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlatformRestaurantAvailabilityWhereInput | PlatformRestaurantAvailabilityWhereInput[]
    OR?: PlatformRestaurantAvailabilityWhereInput[]
    NOT?: PlatformRestaurantAvailabilityWhereInput | PlatformRestaurantAvailabilityWhereInput[]
    created_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    updated_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    restaurant_platform_id?: IntFilter<"PlatformRestaurantAvailability"> | number
    is_available?: BoolFilter<"PlatformRestaurantAvailability"> | boolean
    restaurant_platform?: XOR<RestaurantPlatformScalarRelationFilter, RestaurantPlatformWhereInput>
  }, "id">

  export type PlatformRestaurantAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    restaurant_platform_id?: SortOrder
    is_available?: SortOrder
    _count?: PlatformRestaurantAvailabilityCountOrderByAggregateInput
    _avg?: PlatformRestaurantAvailabilityAvgOrderByAggregateInput
    _max?: PlatformRestaurantAvailabilityMaxOrderByAggregateInput
    _min?: PlatformRestaurantAvailabilityMinOrderByAggregateInput
    _sum?: PlatformRestaurantAvailabilitySumOrderByAggregateInput
  }

  export type PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput = {
    AND?: PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput | PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput[]
    OR?: PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput | PlatformRestaurantAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlatformRestaurantAvailability"> | number
    created_at?: DateTimeWithAggregatesFilter<"PlatformRestaurantAvailability"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PlatformRestaurantAvailability"> | Date | string
    restaurant_platform_id?: IntWithAggregatesFilter<"PlatformRestaurantAvailability"> | number
    is_available?: BoolWithAggregatesFilter<"PlatformRestaurantAvailability"> | boolean
  }

  export type RestaurantsCreateInput = {
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at?: Date | string
    listings?: RestaurantPlatformCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at?: Date | string
    listings?: RestaurantPlatformUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: RestaurantPlatformUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: RestaurantPlatformUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantsCreateManyInput = {
    id?: number
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at?: Date | string
  }

  export type RestaurantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCreateInput = {
    name: string
    platform_uri: string
    created_at?: Date | string
    restaurants?: RestaurantPlatformCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUncheckedCreateInput = {
    id?: number
    name: string
    platform_uri: string
    created_at?: Date | string
    restaurants?: RestaurantPlatformUncheckedCreateNestedManyWithoutPlatformInput
  }

  export type PlatformUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantPlatformUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurants?: RestaurantPlatformUncheckedUpdateManyWithoutPlatformNestedInput
  }

  export type PlatformCreateManyInput = {
    id?: number
    name: string
    platform_uri: string
    created_at?: Date | string
  }

  export type PlatformUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantPlatformCreateInput = {
    restaurant_platform_uri: string
    created_at?: Date | string
    restaurant: RestaurantsCreateNestedOneWithoutListingsInput
    platform: PlatformCreateNestedOneWithoutRestaurantsInput
    platform_availability?: PlatformRestaurantAvailabilityCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformUncheckedCreateInput = {
    id?: number
    restaurant_id: number
    platform_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformUpdateInput = {
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantsUpdateOneRequiredWithoutListingsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutRestaurantsNestedInput
    platform_availability?: PlatformRestaurantAvailabilityUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformCreateManyInput = {
    id?: number
    restaurant_id: number
    platform_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
  }

  export type RestaurantPlatformUpdateManyMutationInput = {
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantPlatformUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformRestaurantAvailabilityCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    is_available?: boolean
    restaurant_platform: RestaurantPlatformCreateNestedOneWithoutPlatform_availabilityInput
  }

  export type PlatformRestaurantAvailabilityUncheckedCreateInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    restaurant_platform_id: number
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    restaurant_platform?: RestaurantPlatformUpdateOneRequiredWithoutPlatform_availabilityNestedInput
  }

  export type PlatformRestaurantAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant_platform_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatformRestaurantAvailabilityCreateManyInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    restaurant_platform_id: number
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatformRestaurantAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant_platform_id?: IntFieldUpdateOperationsInput | number
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RestaurantPlatformListRelationFilter = {
    every?: RestaurantPlatformWhereInput
    some?: RestaurantPlatformWhereInput
    none?: RestaurantPlatformWhereInput
  }

  export type RestaurantPlatformOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    brand?: SortOrder
    city?: SortOrder
    expected_open_time?: SortOrder
    expected_close_time?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestaurantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    brand?: SortOrder
    city?: SortOrder
    expected_open_time?: SortOrder
    expected_close_time?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    brand?: SortOrder
    city?: SortOrder
    expected_open_time?: SortOrder
    expected_close_time?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type PlatformAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type PlatformSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestaurantsScalarRelationFilter = {
    is?: RestaurantsWhereInput
    isNot?: RestaurantsWhereInput
  }

  export type PlatformScalarRelationFilter = {
    is?: PlatformWhereInput
    isNot?: PlatformWhereInput
  }

  export type PlatformRestaurantAvailabilityListRelationFilter = {
    every?: PlatformRestaurantAvailabilityWhereInput
    some?: PlatformRestaurantAvailabilityWhereInput
    none?: PlatformRestaurantAvailabilityWhereInput
  }

  export type PlatformRestaurantAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantPlatformRestaurant_idPlatform_idCompoundUniqueInput = {
    restaurant_id: number
    platform_id: number
  }

  export type RestaurantPlatformCountOrderByAggregateInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
    restaurant_platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantPlatformAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
  }

  export type RestaurantPlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
    restaurant_platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantPlatformMinOrderByAggregateInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
    restaurant_platform_uri?: SortOrder
    created_at?: SortOrder
  }

  export type RestaurantPlatformSumOrderByAggregateInput = {
    id?: SortOrder
    restaurant_id?: SortOrder
    platform_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestaurantPlatformScalarRelationFilter = {
    is?: RestaurantPlatformWhereInput
    isNot?: RestaurantPlatformWhereInput
  }

  export type PlatformRestaurantAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    restaurant_platform_id?: SortOrder
    is_available?: SortOrder
  }

  export type PlatformRestaurantAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    restaurant_platform_id?: SortOrder
  }

  export type PlatformRestaurantAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    restaurant_platform_id?: SortOrder
    is_available?: SortOrder
  }

  export type PlatformRestaurantAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    restaurant_platform_id?: SortOrder
    is_available?: SortOrder
  }

  export type PlatformRestaurantAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    restaurant_platform_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RestaurantPlatformCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput> | RestaurantPlatformCreateWithoutRestaurantInput[] | RestaurantPlatformUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutRestaurantInput | RestaurantPlatformCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantPlatformCreateManyRestaurantInputEnvelope
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
  }

  export type RestaurantPlatformUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput> | RestaurantPlatformCreateWithoutRestaurantInput[] | RestaurantPlatformUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutRestaurantInput | RestaurantPlatformCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantPlatformCreateManyRestaurantInputEnvelope
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RestaurantPlatformUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput> | RestaurantPlatformCreateWithoutRestaurantInput[] | RestaurantPlatformUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutRestaurantInput | RestaurantPlatformCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantPlatformUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantPlatformUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantPlatformCreateManyRestaurantInputEnvelope
    set?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    disconnect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    delete?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    update?: RestaurantPlatformUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantPlatformUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantPlatformUpdateManyWithWhereWithoutRestaurantInput | RestaurantPlatformUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestaurantPlatformUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput> | RestaurantPlatformCreateWithoutRestaurantInput[] | RestaurantPlatformUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutRestaurantInput | RestaurantPlatformCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantPlatformUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantPlatformUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantPlatformCreateManyRestaurantInputEnvelope
    set?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    disconnect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    delete?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    update?: RestaurantPlatformUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantPlatformUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantPlatformUpdateManyWithWhereWithoutRestaurantInput | RestaurantPlatformUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
  }

  export type RestaurantPlatformCreateNestedManyWithoutPlatformInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput> | RestaurantPlatformCreateWithoutPlatformInput[] | RestaurantPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatformInput | RestaurantPlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: RestaurantPlatformCreateManyPlatformInputEnvelope
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
  }

  export type RestaurantPlatformUncheckedCreateNestedManyWithoutPlatformInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput> | RestaurantPlatformCreateWithoutPlatformInput[] | RestaurantPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatformInput | RestaurantPlatformCreateOrConnectWithoutPlatformInput[]
    createMany?: RestaurantPlatformCreateManyPlatformInputEnvelope
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
  }

  export type RestaurantPlatformUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput> | RestaurantPlatformCreateWithoutPlatformInput[] | RestaurantPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatformInput | RestaurantPlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: RestaurantPlatformUpsertWithWhereUniqueWithoutPlatformInput | RestaurantPlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: RestaurantPlatformCreateManyPlatformInputEnvelope
    set?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    disconnect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    delete?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    update?: RestaurantPlatformUpdateWithWhereUniqueWithoutPlatformInput | RestaurantPlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: RestaurantPlatformUpdateManyWithWhereWithoutPlatformInput | RestaurantPlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
  }

  export type RestaurantPlatformUncheckedUpdateManyWithoutPlatformNestedInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput> | RestaurantPlatformCreateWithoutPlatformInput[] | RestaurantPlatformUncheckedCreateWithoutPlatformInput[]
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatformInput | RestaurantPlatformCreateOrConnectWithoutPlatformInput[]
    upsert?: RestaurantPlatformUpsertWithWhereUniqueWithoutPlatformInput | RestaurantPlatformUpsertWithWhereUniqueWithoutPlatformInput[]
    createMany?: RestaurantPlatformCreateManyPlatformInputEnvelope
    set?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    disconnect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    delete?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    connect?: RestaurantPlatformWhereUniqueInput | RestaurantPlatformWhereUniqueInput[]
    update?: RestaurantPlatformUpdateWithWhereUniqueWithoutPlatformInput | RestaurantPlatformUpdateWithWhereUniqueWithoutPlatformInput[]
    updateMany?: RestaurantPlatformUpdateManyWithWhereWithoutPlatformInput | RestaurantPlatformUpdateManyWithWhereWithoutPlatformInput[]
    deleteMany?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
  }

  export type RestaurantsCreateNestedOneWithoutListingsInput = {
    create?: XOR<RestaurantsCreateWithoutListingsInput, RestaurantsUncheckedCreateWithoutListingsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutListingsInput
    connect?: RestaurantsWhereUniqueInput
  }

  export type PlatformCreateNestedOneWithoutRestaurantsInput = {
    create?: XOR<PlatformCreateWithoutRestaurantsInput, PlatformUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutRestaurantsInput
    connect?: PlatformWhereUniqueInput
  }

  export type PlatformRestaurantAvailabilityCreateNestedManyWithoutRestaurant_platformInput = {
    create?: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput> | PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput[] | PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput[]
    connectOrCreate?: PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput[]
    createMany?: PlatformRestaurantAvailabilityCreateManyRestaurant_platformInputEnvelope
    connect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
  }

  export type PlatformRestaurantAvailabilityUncheckedCreateNestedManyWithoutRestaurant_platformInput = {
    create?: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput> | PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput[] | PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput[]
    connectOrCreate?: PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput[]
    createMany?: PlatformRestaurantAvailabilityCreateManyRestaurant_platformInputEnvelope
    connect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
  }

  export type RestaurantsUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<RestaurantsCreateWithoutListingsInput, RestaurantsUncheckedCreateWithoutListingsInput>
    connectOrCreate?: RestaurantsCreateOrConnectWithoutListingsInput
    upsert?: RestaurantsUpsertWithoutListingsInput
    connect?: RestaurantsWhereUniqueInput
    update?: XOR<XOR<RestaurantsUpdateToOneWithWhereWithoutListingsInput, RestaurantsUpdateWithoutListingsInput>, RestaurantsUncheckedUpdateWithoutListingsInput>
  }

  export type PlatformUpdateOneRequiredWithoutRestaurantsNestedInput = {
    create?: XOR<PlatformCreateWithoutRestaurantsInput, PlatformUncheckedCreateWithoutRestaurantsInput>
    connectOrCreate?: PlatformCreateOrConnectWithoutRestaurantsInput
    upsert?: PlatformUpsertWithoutRestaurantsInput
    connect?: PlatformWhereUniqueInput
    update?: XOR<XOR<PlatformUpdateToOneWithWhereWithoutRestaurantsInput, PlatformUpdateWithoutRestaurantsInput>, PlatformUncheckedUpdateWithoutRestaurantsInput>
  }

  export type PlatformRestaurantAvailabilityUpdateManyWithoutRestaurant_platformNestedInput = {
    create?: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput> | PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput[] | PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput[]
    connectOrCreate?: PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput[]
    upsert?: PlatformRestaurantAvailabilityUpsertWithWhereUniqueWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpsertWithWhereUniqueWithoutRestaurant_platformInput[]
    createMany?: PlatformRestaurantAvailabilityCreateManyRestaurant_platformInputEnvelope
    set?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    disconnect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    delete?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    connect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    update?: PlatformRestaurantAvailabilityUpdateWithWhereUniqueWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpdateWithWhereUniqueWithoutRestaurant_platformInput[]
    updateMany?: PlatformRestaurantAvailabilityUpdateManyWithWhereWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpdateManyWithWhereWithoutRestaurant_platformInput[]
    deleteMany?: PlatformRestaurantAvailabilityScalarWhereInput | PlatformRestaurantAvailabilityScalarWhereInput[]
  }

  export type PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformNestedInput = {
    create?: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput> | PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput[] | PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput[]
    connectOrCreate?: PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput[]
    upsert?: PlatformRestaurantAvailabilityUpsertWithWhereUniqueWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpsertWithWhereUniqueWithoutRestaurant_platformInput[]
    createMany?: PlatformRestaurantAvailabilityCreateManyRestaurant_platformInputEnvelope
    set?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    disconnect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    delete?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    connect?: PlatformRestaurantAvailabilityWhereUniqueInput | PlatformRestaurantAvailabilityWhereUniqueInput[]
    update?: PlatformRestaurantAvailabilityUpdateWithWhereUniqueWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpdateWithWhereUniqueWithoutRestaurant_platformInput[]
    updateMany?: PlatformRestaurantAvailabilityUpdateManyWithWhereWithoutRestaurant_platformInput | PlatformRestaurantAvailabilityUpdateManyWithWhereWithoutRestaurant_platformInput[]
    deleteMany?: PlatformRestaurantAvailabilityScalarWhereInput | PlatformRestaurantAvailabilityScalarWhereInput[]
  }

  export type RestaurantPlatformCreateNestedOneWithoutPlatform_availabilityInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedCreateWithoutPlatform_availabilityInput>
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatform_availabilityInput
    connect?: RestaurantPlatformWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantPlatformUpdateOneRequiredWithoutPlatform_availabilityNestedInput = {
    create?: XOR<RestaurantPlatformCreateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedCreateWithoutPlatform_availabilityInput>
    connectOrCreate?: RestaurantPlatformCreateOrConnectWithoutPlatform_availabilityInput
    upsert?: RestaurantPlatformUpsertWithoutPlatform_availabilityInput
    connect?: RestaurantPlatformWhereUniqueInput
    update?: XOR<XOR<RestaurantPlatformUpdateToOneWithWhereWithoutPlatform_availabilityInput, RestaurantPlatformUpdateWithoutPlatform_availabilityInput>, RestaurantPlatformUncheckedUpdateWithoutPlatform_availabilityInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RestaurantPlatformCreateWithoutRestaurantInput = {
    restaurant_platform_uri: string
    created_at?: Date | string
    platform: PlatformCreateNestedOneWithoutRestaurantsInput
    platform_availability?: PlatformRestaurantAvailabilityCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformUncheckedCreateWithoutRestaurantInput = {
    id?: number
    platform_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformCreateOrConnectWithoutRestaurantInput = {
    where: RestaurantPlatformWhereUniqueInput
    create: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantPlatformCreateManyRestaurantInputEnvelope = {
    data: RestaurantPlatformCreateManyRestaurantInput | RestaurantPlatformCreateManyRestaurantInput[]
  }

  export type RestaurantPlatformUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantPlatformWhereUniqueInput
    update: XOR<RestaurantPlatformUpdateWithoutRestaurantInput, RestaurantPlatformUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RestaurantPlatformCreateWithoutRestaurantInput, RestaurantPlatformUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantPlatformUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantPlatformWhereUniqueInput
    data: XOR<RestaurantPlatformUpdateWithoutRestaurantInput, RestaurantPlatformUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantPlatformUpdateManyWithWhereWithoutRestaurantInput = {
    where: RestaurantPlatformScalarWhereInput
    data: XOR<RestaurantPlatformUpdateManyMutationInput, RestaurantPlatformUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantPlatformScalarWhereInput = {
    AND?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
    OR?: RestaurantPlatformScalarWhereInput[]
    NOT?: RestaurantPlatformScalarWhereInput | RestaurantPlatformScalarWhereInput[]
    id?: IntFilter<"RestaurantPlatform"> | number
    restaurant_id?: IntFilter<"RestaurantPlatform"> | number
    platform_id?: IntFilter<"RestaurantPlatform"> | number
    restaurant_platform_uri?: StringFilter<"RestaurantPlatform"> | string
    created_at?: DateTimeFilter<"RestaurantPlatform"> | Date | string
  }

  export type RestaurantPlatformCreateWithoutPlatformInput = {
    restaurant_platform_uri: string
    created_at?: Date | string
    restaurant: RestaurantsCreateNestedOneWithoutListingsInput
    platform_availability?: PlatformRestaurantAvailabilityCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformUncheckedCreateWithoutPlatformInput = {
    id?: number
    restaurant_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedCreateNestedManyWithoutRestaurant_platformInput
  }

  export type RestaurantPlatformCreateOrConnectWithoutPlatformInput = {
    where: RestaurantPlatformWhereUniqueInput
    create: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput>
  }

  export type RestaurantPlatformCreateManyPlatformInputEnvelope = {
    data: RestaurantPlatformCreateManyPlatformInput | RestaurantPlatformCreateManyPlatformInput[]
  }

  export type RestaurantPlatformUpsertWithWhereUniqueWithoutPlatformInput = {
    where: RestaurantPlatformWhereUniqueInput
    update: XOR<RestaurantPlatformUpdateWithoutPlatformInput, RestaurantPlatformUncheckedUpdateWithoutPlatformInput>
    create: XOR<RestaurantPlatformCreateWithoutPlatformInput, RestaurantPlatformUncheckedCreateWithoutPlatformInput>
  }

  export type RestaurantPlatformUpdateWithWhereUniqueWithoutPlatformInput = {
    where: RestaurantPlatformWhereUniqueInput
    data: XOR<RestaurantPlatformUpdateWithoutPlatformInput, RestaurantPlatformUncheckedUpdateWithoutPlatformInput>
  }

  export type RestaurantPlatformUpdateManyWithWhereWithoutPlatformInput = {
    where: RestaurantPlatformScalarWhereInput
    data: XOR<RestaurantPlatformUpdateManyMutationInput, RestaurantPlatformUncheckedUpdateManyWithoutPlatformInput>
  }

  export type RestaurantsCreateWithoutListingsInput = {
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at?: Date | string
  }

  export type RestaurantsUncheckedCreateWithoutListingsInput = {
    id?: number
    name: string
    address: string
    brand: string
    city: string
    expected_open_time: string
    expected_close_time: string
    created_at?: Date | string
  }

  export type RestaurantsCreateOrConnectWithoutListingsInput = {
    where: RestaurantsWhereUniqueInput
    create: XOR<RestaurantsCreateWithoutListingsInput, RestaurantsUncheckedCreateWithoutListingsInput>
  }

  export type PlatformCreateWithoutRestaurantsInput = {
    name: string
    platform_uri: string
    created_at?: Date | string
  }

  export type PlatformUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    name: string
    platform_uri: string
    created_at?: Date | string
  }

  export type PlatformCreateOrConnectWithoutRestaurantsInput = {
    where: PlatformWhereUniqueInput
    create: XOR<PlatformCreateWithoutRestaurantsInput, PlatformUncheckedCreateWithoutRestaurantsInput>
  }

  export type PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput = {
    created_at?: Date | string
    updated_at?: Date | string
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityCreateOrConnectWithoutRestaurant_platformInput = {
    where: PlatformRestaurantAvailabilityWhereUniqueInput
    create: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput>
  }

  export type PlatformRestaurantAvailabilityCreateManyRestaurant_platformInputEnvelope = {
    data: PlatformRestaurantAvailabilityCreateManyRestaurant_platformInput | PlatformRestaurantAvailabilityCreateManyRestaurant_platformInput[]
  }

  export type RestaurantsUpsertWithoutListingsInput = {
    update: XOR<RestaurantsUpdateWithoutListingsInput, RestaurantsUncheckedUpdateWithoutListingsInput>
    create: XOR<RestaurantsCreateWithoutListingsInput, RestaurantsUncheckedCreateWithoutListingsInput>
    where?: RestaurantsWhereInput
  }

  export type RestaurantsUpdateToOneWithWhereWithoutListingsInput = {
    where?: RestaurantsWhereInput
    data: XOR<RestaurantsUpdateWithoutListingsInput, RestaurantsUncheckedUpdateWithoutListingsInput>
  }

  export type RestaurantsUpdateWithoutListingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantsUncheckedUpdateWithoutListingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    expected_open_time?: StringFieldUpdateOperationsInput | string
    expected_close_time?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUpsertWithoutRestaurantsInput = {
    update: XOR<PlatformUpdateWithoutRestaurantsInput, PlatformUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<PlatformCreateWithoutRestaurantsInput, PlatformUncheckedCreateWithoutRestaurantsInput>
    where?: PlatformWhereInput
  }

  export type PlatformUpdateToOneWithWhereWithoutRestaurantsInput = {
    where?: PlatformWhereInput
    data: XOR<PlatformUpdateWithoutRestaurantsInput, PlatformUncheckedUpdateWithoutRestaurantsInput>
  }

  export type PlatformUpdateWithoutRestaurantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformRestaurantAvailabilityUpsertWithWhereUniqueWithoutRestaurant_platformInput = {
    where: PlatformRestaurantAvailabilityWhereUniqueInput
    update: XOR<PlatformRestaurantAvailabilityUpdateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedUpdateWithoutRestaurant_platformInput>
    create: XOR<PlatformRestaurantAvailabilityCreateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedCreateWithoutRestaurant_platformInput>
  }

  export type PlatformRestaurantAvailabilityUpdateWithWhereUniqueWithoutRestaurant_platformInput = {
    where: PlatformRestaurantAvailabilityWhereUniqueInput
    data: XOR<PlatformRestaurantAvailabilityUpdateWithoutRestaurant_platformInput, PlatformRestaurantAvailabilityUncheckedUpdateWithoutRestaurant_platformInput>
  }

  export type PlatformRestaurantAvailabilityUpdateManyWithWhereWithoutRestaurant_platformInput = {
    where: PlatformRestaurantAvailabilityScalarWhereInput
    data: XOR<PlatformRestaurantAvailabilityUpdateManyMutationInput, PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformInput>
  }

  export type PlatformRestaurantAvailabilityScalarWhereInput = {
    AND?: PlatformRestaurantAvailabilityScalarWhereInput | PlatformRestaurantAvailabilityScalarWhereInput[]
    OR?: PlatformRestaurantAvailabilityScalarWhereInput[]
    NOT?: PlatformRestaurantAvailabilityScalarWhereInput | PlatformRestaurantAvailabilityScalarWhereInput[]
    id?: IntFilter<"PlatformRestaurantAvailability"> | number
    created_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    updated_at?: DateTimeFilter<"PlatformRestaurantAvailability"> | Date | string
    restaurant_platform_id?: IntFilter<"PlatformRestaurantAvailability"> | number
    is_available?: BoolFilter<"PlatformRestaurantAvailability"> | boolean
  }

  export type RestaurantPlatformCreateWithoutPlatform_availabilityInput = {
    restaurant_platform_uri: string
    created_at?: Date | string
    restaurant: RestaurantsCreateNestedOneWithoutListingsInput
    platform: PlatformCreateNestedOneWithoutRestaurantsInput
  }

  export type RestaurantPlatformUncheckedCreateWithoutPlatform_availabilityInput = {
    id?: number
    restaurant_id: number
    platform_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
  }

  export type RestaurantPlatformCreateOrConnectWithoutPlatform_availabilityInput = {
    where: RestaurantPlatformWhereUniqueInput
    create: XOR<RestaurantPlatformCreateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedCreateWithoutPlatform_availabilityInput>
  }

  export type RestaurantPlatformUpsertWithoutPlatform_availabilityInput = {
    update: XOR<RestaurantPlatformUpdateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedUpdateWithoutPlatform_availabilityInput>
    create: XOR<RestaurantPlatformCreateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedCreateWithoutPlatform_availabilityInput>
    where?: RestaurantPlatformWhereInput
  }

  export type RestaurantPlatformUpdateToOneWithWhereWithoutPlatform_availabilityInput = {
    where?: RestaurantPlatformWhereInput
    data: XOR<RestaurantPlatformUpdateWithoutPlatform_availabilityInput, RestaurantPlatformUncheckedUpdateWithoutPlatform_availabilityInput>
  }

  export type RestaurantPlatformUpdateWithoutPlatform_availabilityInput = {
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantsUpdateOneRequiredWithoutListingsNestedInput
    platform?: PlatformUpdateOneRequiredWithoutRestaurantsNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateWithoutPlatform_availabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantPlatformCreateManyRestaurantInput = {
    id?: number
    platform_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
  }

  export type RestaurantPlatformUpdateWithoutRestaurantInput = {
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: PlatformUpdateOneRequiredWithoutRestaurantsNestedInput
    platform_availability?: PlatformRestaurantAvailabilityUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantPlatformCreateManyPlatformInput = {
    id?: number
    restaurant_id: number
    restaurant_platform_uri: string
    created_at?: Date | string
  }

  export type RestaurantPlatformUpdateWithoutPlatformInput = {
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantsUpdateOneRequiredWithoutListingsNestedInput
    platform_availability?: PlatformRestaurantAvailabilityUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateWithoutPlatformInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    platform_availability?: PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformNestedInput
  }

  export type RestaurantPlatformUncheckedUpdateManyWithoutPlatformInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    restaurant_platform_uri?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformRestaurantAvailabilityCreateManyRestaurant_platformInput = {
    id?: number
    created_at?: Date | string
    updated_at?: Date | string
    is_available?: boolean
  }

  export type PlatformRestaurantAvailabilityUpdateWithoutRestaurant_platformInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatformRestaurantAvailabilityUncheckedUpdateWithoutRestaurant_platformInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlatformRestaurantAvailabilityUncheckedUpdateManyWithoutRestaurant_platformInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}