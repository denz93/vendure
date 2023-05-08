// tslint:disable
/** This file was generated by the graphql-errors-plugin, which is part of the "codegen" npm script. */

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export class ErrorResult {
  readonly __typename: string;
  readonly errorCode: string;
message: Scalars['String'];
}

export class AlreadyRefundedError extends ErrorResult {
  readonly __typename = 'AlreadyRefundedError';
  readonly errorCode = 'ALREADY_REFUNDED_ERROR' as any;
  readonly message = 'ALREADY_REFUNDED_ERROR';
  constructor(
    public refundId: Scalars['ID'],
  ) {
    super();
  }
}

export class CancelActiveOrderError extends ErrorResult {
  readonly __typename = 'CancelActiveOrderError';
  readonly errorCode = 'CANCEL_ACTIVE_ORDER_ERROR' as any;
  readonly message = 'CANCEL_ACTIVE_ORDER_ERROR';
  constructor(
    public orderState: Scalars['String'],
  ) {
    super();
  }
}

export class CancelPaymentError extends ErrorResult {
  readonly __typename = 'CancelPaymentError';
  readonly errorCode = 'CANCEL_PAYMENT_ERROR' as any;
  readonly message = 'CANCEL_PAYMENT_ERROR';
  constructor(
    public paymentErrorMessage: Scalars['String'],
  ) {
    super();
  }
}

export class ChannelDefaultLanguageError extends ErrorResult {
  readonly __typename = 'ChannelDefaultLanguageError';
  readonly errorCode = 'CHANNEL_DEFAULT_LANGUAGE_ERROR' as any;
  readonly message = 'CHANNEL_DEFAULT_LANGUAGE_ERROR';
  constructor(
    public language: Scalars['String'],
    public channelCode: Scalars['String'],
  ) {
    super();
  }
}

export class CouponCodeExpiredError extends ErrorResult {
  readonly __typename = 'CouponCodeExpiredError';
  readonly errorCode = 'COUPON_CODE_EXPIRED_ERROR' as any;
  readonly message = 'COUPON_CODE_EXPIRED_ERROR';
  constructor(
    public couponCode: Scalars['String'],
  ) {
    super();
  }
}

export class CouponCodeInvalidError extends ErrorResult {
  readonly __typename = 'CouponCodeInvalidError';
  readonly errorCode = 'COUPON_CODE_INVALID_ERROR' as any;
  readonly message = 'COUPON_CODE_INVALID_ERROR';
  constructor(
    public couponCode: Scalars['String'],
  ) {
    super();
  }
}

export class CouponCodeLimitError extends ErrorResult {
  readonly __typename = 'CouponCodeLimitError';
  readonly errorCode = 'COUPON_CODE_LIMIT_ERROR' as any;
  readonly message = 'COUPON_CODE_LIMIT_ERROR';
  constructor(
    public couponCode: Scalars['String'],
    public limit: Scalars['Int'],
  ) {
    super();
  }
}

export class CreateFulfillmentError extends ErrorResult {
  readonly __typename = 'CreateFulfillmentError';
  readonly errorCode = 'CREATE_FULFILLMENT_ERROR' as any;
  readonly message = 'CREATE_FULFILLMENT_ERROR';
  constructor(
    public fulfillmentHandlerError: Scalars['String'],
  ) {
    super();
  }
}

export class EmailAddressConflictError extends ErrorResult {
  readonly __typename = 'EmailAddressConflictError';
  readonly errorCode = 'EMAIL_ADDRESS_CONFLICT_ERROR' as any;
  readonly message = 'EMAIL_ADDRESS_CONFLICT_ERROR';
  constructor(
  ) {
    super();
  }
}

export class EmptyOrderLineSelectionError extends ErrorResult {
  readonly __typename = 'EmptyOrderLineSelectionError';
  readonly errorCode = 'EMPTY_ORDER_LINE_SELECTION_ERROR' as any;
  readonly message = 'EMPTY_ORDER_LINE_SELECTION_ERROR';
  constructor(
  ) {
    super();
  }
}

export class FacetInUseError extends ErrorResult {
  readonly __typename = 'FacetInUseError';
  readonly errorCode = 'FACET_IN_USE_ERROR' as any;
  readonly message = 'FACET_IN_USE_ERROR';
  constructor(
    public facetCode: Scalars['String'],
    public productCount: Scalars['Int'],
    public variantCount: Scalars['Int'],
  ) {
    super();
  }
}

export class FulfillmentNotInPendingError extends ErrorResult {
  readonly __typename = 'FulfillmentNotInPendingError';
  readonly errorCode = 'FULFILLMENT_NOT_IN_PENDING_ERROR' as any;
  readonly message = 'FULFILLMENT_NOT_IN_PENDING_ERROR';
  constructor(
  ) {
    super();
  }
}

export class FulfillmentStateTransitionError extends ErrorResult {
  readonly __typename = 'FulfillmentStateTransitionError';
  readonly errorCode = 'FULFILLMENT_STATE_TRANSITION_ERROR' as any;
  readonly message = 'FULFILLMENT_STATE_TRANSITION_ERROR';
  constructor(
    public transitionError: Scalars['String'],
    public fromState: Scalars['String'],
    public toState: Scalars['String'],
  ) {
    super();
  }
}

export class IneligibleShippingMethodError extends ErrorResult {
  readonly __typename = 'IneligibleShippingMethodError';
  readonly errorCode = 'INELIGIBLE_SHIPPING_METHOD_ERROR' as any;
  readonly message = 'INELIGIBLE_SHIPPING_METHOD_ERROR';
  constructor(
  ) {
    super();
  }
}

export class InsufficientStockError extends ErrorResult {
  readonly __typename = 'InsufficientStockError';
  readonly errorCode = 'INSUFFICIENT_STOCK_ERROR' as any;
  readonly message = 'INSUFFICIENT_STOCK_ERROR';
  constructor(
    public quantityAvailable: Scalars['Int'],
    public order: any,
  ) {
    super();
  }
}

export class InsufficientStockOnHandError extends ErrorResult {
  readonly __typename = 'InsufficientStockOnHandError';
  readonly errorCode = 'INSUFFICIENT_STOCK_ON_HAND_ERROR' as any;
  readonly message = 'INSUFFICIENT_STOCK_ON_HAND_ERROR';
  constructor(
    public productVariantId: Scalars['ID'],
    public productVariantName: Scalars['String'],
    public stockOnHand: Scalars['Int'],
  ) {
    super();
  }
}

export class InvalidCredentialsError extends ErrorResult {
  readonly __typename = 'InvalidCredentialsError';
  readonly errorCode = 'INVALID_CREDENTIALS_ERROR' as any;
  readonly message = 'INVALID_CREDENTIALS_ERROR';
  constructor(
    public authenticationError: Scalars['String'],
  ) {
    super();
  }
}

export class InvalidFulfillmentHandlerError extends ErrorResult {
  readonly __typename = 'InvalidFulfillmentHandlerError';
  readonly errorCode = 'INVALID_FULFILLMENT_HANDLER_ERROR' as any;
  readonly message = 'INVALID_FULFILLMENT_HANDLER_ERROR';
  constructor(
  ) {
    super();
  }
}

export class ItemsAlreadyFulfilledError extends ErrorResult {
  readonly __typename = 'ItemsAlreadyFulfilledError';
  readonly errorCode = 'ITEMS_ALREADY_FULFILLED_ERROR' as any;
  readonly message = 'ITEMS_ALREADY_FULFILLED_ERROR';
  constructor(
  ) {
    super();
  }
}

export class LanguageNotAvailableError extends ErrorResult {
  readonly __typename = 'LanguageNotAvailableError';
  readonly errorCode = 'LANGUAGE_NOT_AVAILABLE_ERROR' as any;
  readonly message = 'LANGUAGE_NOT_AVAILABLE_ERROR';
  constructor(
    public languageCode: Scalars['String'],
  ) {
    super();
  }
}

export class ManualPaymentStateError extends ErrorResult {
  readonly __typename = 'ManualPaymentStateError';
  readonly errorCode = 'MANUAL_PAYMENT_STATE_ERROR' as any;
  readonly message = 'MANUAL_PAYMENT_STATE_ERROR';
  constructor(
  ) {
    super();
  }
}

export class MimeTypeError extends ErrorResult {
  readonly __typename = 'MimeTypeError';
  readonly errorCode = 'MIME_TYPE_ERROR' as any;
  readonly message = 'MIME_TYPE_ERROR';
  constructor(
    public fileName: Scalars['String'],
    public mimeType: Scalars['String'],
  ) {
    super();
  }
}

export class MissingConditionsError extends ErrorResult {
  readonly __typename = 'MissingConditionsError';
  readonly errorCode = 'MISSING_CONDITIONS_ERROR' as any;
  readonly message = 'MISSING_CONDITIONS_ERROR';
  constructor(
  ) {
    super();
  }
}

export class MultipleOrderError extends ErrorResult {
  readonly __typename = 'MultipleOrderError';
  readonly errorCode = 'MULTIPLE_ORDER_ERROR' as any;
  readonly message = 'MULTIPLE_ORDER_ERROR';
  constructor(
  ) {
    super();
  }
}

export class NativeAuthStrategyError extends ErrorResult {
  readonly __typename = 'NativeAuthStrategyError';
  readonly errorCode = 'NATIVE_AUTH_STRATEGY_ERROR' as any;
  readonly message = 'NATIVE_AUTH_STRATEGY_ERROR';
  constructor(
  ) {
    super();
  }
}

export class NegativeQuantityError extends ErrorResult {
  readonly __typename = 'NegativeQuantityError';
  readonly errorCode = 'NEGATIVE_QUANTITY_ERROR' as any;
  readonly message = 'NEGATIVE_QUANTITY_ERROR';
  constructor(
  ) {
    super();
  }
}

export class NoActiveOrderError extends ErrorResult {
  readonly __typename = 'NoActiveOrderError';
  readonly errorCode = 'NO_ACTIVE_ORDER_ERROR' as any;
  readonly message = 'NO_ACTIVE_ORDER_ERROR';
  constructor(
  ) {
    super();
  }
}

export class NoChangesSpecifiedError extends ErrorResult {
  readonly __typename = 'NoChangesSpecifiedError';
  readonly errorCode = 'NO_CHANGES_SPECIFIED_ERROR' as any;
  readonly message = 'NO_CHANGES_SPECIFIED_ERROR';
  constructor(
  ) {
    super();
  }
}

export class NothingToRefundError extends ErrorResult {
  readonly __typename = 'NothingToRefundError';
  readonly errorCode = 'NOTHING_TO_REFUND_ERROR' as any;
  readonly message = 'NOTHING_TO_REFUND_ERROR';
  constructor(
  ) {
    super();
  }
}

export class OrderLimitError extends ErrorResult {
  readonly __typename = 'OrderLimitError';
  readonly errorCode = 'ORDER_LIMIT_ERROR' as any;
  readonly message = 'ORDER_LIMIT_ERROR';
  constructor(
    public maxItems: Scalars['Int'],
  ) {
    super();
  }
}

export class OrderModificationError extends ErrorResult {
  readonly __typename = 'OrderModificationError';
  readonly errorCode = 'ORDER_MODIFICATION_ERROR' as any;
  readonly message = 'ORDER_MODIFICATION_ERROR';
  constructor(
  ) {
    super();
  }
}

export class OrderModificationStateError extends ErrorResult {
  readonly __typename = 'OrderModificationStateError';
  readonly errorCode = 'ORDER_MODIFICATION_STATE_ERROR' as any;
  readonly message = 'ORDER_MODIFICATION_STATE_ERROR';
  constructor(
  ) {
    super();
  }
}

export class OrderStateTransitionError extends ErrorResult {
  readonly __typename = 'OrderStateTransitionError';
  readonly errorCode = 'ORDER_STATE_TRANSITION_ERROR' as any;
  readonly message = 'ORDER_STATE_TRANSITION_ERROR';
  constructor(
    public transitionError: Scalars['String'],
    public fromState: Scalars['String'],
    public toState: Scalars['String'],
  ) {
    super();
  }
}

export class PaymentMethodMissingError extends ErrorResult {
  readonly __typename = 'PaymentMethodMissingError';
  readonly errorCode = 'PAYMENT_METHOD_MISSING_ERROR' as any;
  readonly message = 'PAYMENT_METHOD_MISSING_ERROR';
  constructor(
  ) {
    super();
  }
}

export class PaymentOrderMismatchError extends ErrorResult {
  readonly __typename = 'PaymentOrderMismatchError';
  readonly errorCode = 'PAYMENT_ORDER_MISMATCH_ERROR' as any;
  readonly message = 'PAYMENT_ORDER_MISMATCH_ERROR';
  constructor(
  ) {
    super();
  }
}

export class PaymentStateTransitionError extends ErrorResult {
  readonly __typename = 'PaymentStateTransitionError';
  readonly errorCode = 'PAYMENT_STATE_TRANSITION_ERROR' as any;
  readonly message = 'PAYMENT_STATE_TRANSITION_ERROR';
  constructor(
    public transitionError: Scalars['String'],
    public fromState: Scalars['String'],
    public toState: Scalars['String'],
  ) {
    super();
  }
}

export class ProductOptionInUseError extends ErrorResult {
  readonly __typename = 'ProductOptionInUseError';
  readonly errorCode = 'PRODUCT_OPTION_IN_USE_ERROR' as any;
  readonly message = 'PRODUCT_OPTION_IN_USE_ERROR';
  constructor(
    public optionGroupCode: Scalars['String'],
    public productVariantCount: Scalars['Int'],
  ) {
    super();
  }
}

export class QuantityTooGreatError extends ErrorResult {
  readonly __typename = 'QuantityTooGreatError';
  readonly errorCode = 'QUANTITY_TOO_GREAT_ERROR' as any;
  readonly message = 'QUANTITY_TOO_GREAT_ERROR';
  constructor(
  ) {
    super();
  }
}

export class RefundOrderStateError extends ErrorResult {
  readonly __typename = 'RefundOrderStateError';
  readonly errorCode = 'REFUND_ORDER_STATE_ERROR' as any;
  readonly message = 'REFUND_ORDER_STATE_ERROR';
  constructor(
    public orderState: Scalars['String'],
  ) {
    super();
  }
}

export class RefundPaymentIdMissingError extends ErrorResult {
  readonly __typename = 'RefundPaymentIdMissingError';
  readonly errorCode = 'REFUND_PAYMENT_ID_MISSING_ERROR' as any;
  readonly message = 'REFUND_PAYMENT_ID_MISSING_ERROR';
  constructor(
  ) {
    super();
  }
}

export class RefundStateTransitionError extends ErrorResult {
  readonly __typename = 'RefundStateTransitionError';
  readonly errorCode = 'REFUND_STATE_TRANSITION_ERROR' as any;
  readonly message = 'REFUND_STATE_TRANSITION_ERROR';
  constructor(
    public transitionError: Scalars['String'],
    public fromState: Scalars['String'],
    public toState: Scalars['String'],
  ) {
    super();
  }
}

export class SettlePaymentError extends ErrorResult {
  readonly __typename = 'SettlePaymentError';
  readonly errorCode = 'SETTLE_PAYMENT_ERROR' as any;
  readonly message = 'SETTLE_PAYMENT_ERROR';
  constructor(
    public paymentErrorMessage: Scalars['String'],
  ) {
    super();
  }
}


const errorTypeNames = new Set(['AlreadyRefundedError', 'CancelActiveOrderError', 'CancelPaymentError', 'ChannelDefaultLanguageError', 'CouponCodeExpiredError', 'CouponCodeInvalidError', 'CouponCodeLimitError', 'CreateFulfillmentError', 'EmailAddressConflictError', 'EmptyOrderLineSelectionError', 'FacetInUseError', 'FulfillmentNotInPendingError', 'FulfillmentStateTransitionError', 'IneligibleShippingMethodError', 'InsufficientStockError', 'InsufficientStockOnHandError', 'InvalidCredentialsError', 'InvalidFulfillmentHandlerError', 'ItemsAlreadyFulfilledError', 'LanguageNotAvailableError', 'ManualPaymentStateError', 'MimeTypeError', 'MissingConditionsError', 'MultipleOrderError', 'NativeAuthStrategyError', 'NegativeQuantityError', 'NoActiveOrderError', 'NoChangesSpecifiedError', 'NothingToRefundError', 'OrderLimitError', 'OrderModificationError', 'OrderModificationStateError', 'OrderStateTransitionError', 'PaymentMethodMissingError', 'PaymentOrderMismatchError', 'PaymentStateTransitionError', 'ProductOptionInUseError', 'QuantityTooGreatError', 'RefundOrderStateError', 'RefundPaymentIdMissingError', 'RefundStateTransitionError', 'SettlePaymentError']);
function isGraphQLError(input: any): input is import('@vendure/common/lib/generated-types').ErrorResult {
  return input instanceof ErrorResult || errorTypeNames.has(input.__typename);
}

export const adminErrorOperationTypeResolvers = {
  CreateAssetResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Asset';
    },
  },
  NativeAuthenticationResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'CurrentUser';
    },
  },
  AuthenticationResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'CurrentUser';
    },
  },
  CreateChannelResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Channel';
    },
  },
  UpdateChannelResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Channel';
    },
  },
  CreateCustomerResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Customer';
    },
  },
  UpdateCustomerResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Customer';
    },
  },
  RemoveFacetFromChannelResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Facet';
    },
  },
  UpdateGlobalSettingsResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'GlobalSettings';
    },
  },
  SettlePaymentResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Payment';
    },
  },
  CancelPaymentResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Payment';
    },
  },
  AddFulfillmentToOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Fulfillment';
    },
  },
  UpdatePendingFulfillmentResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Fulfillment';
    },
  },
  CancelOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  RefundOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Refund';
    },
  },
  SettleRefundResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Refund';
    },
  },
  TransitionOrderToStateResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  TransitionFulfillmentToStateResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Fulfillment';
    },
  },
  TransitionPaymentToStateResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Payment';
    },
  },
  ModifyOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  AddManualPaymentToOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  UpdateOrderItemsResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  RemoveOrderItemsResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  SetCustomerForDraftOrderResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  ApplyCouponCodeResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  SetOrderShippingMethodResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Order';
    },
  },
  RemoveOptionGroupFromProductResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Product';
    },
  },
  CreatePromotionResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Promotion';
    },
  },
  UpdatePromotionResult: {
    __resolveType(value: any) {
      return isGraphQLError(value) ? (value as any).__typename : 'Promotion';
    },
  },
};