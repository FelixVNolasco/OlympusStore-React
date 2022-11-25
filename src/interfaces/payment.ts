export interface Address {
    city: string;
    country: string;
    line1: string;
    line2?: any;
    postal_code: string;
    state: string;
}

export interface BillingDetails {
    address: Address;
    email?: any;
    name: string;
    phone?: any;
}

export interface FraudDetails {
}

export interface Metadata {
}

export interface Outcome {
    network_status: string;
    reason?: any;
    risk_level: string;
    risk_score: number;
    seller_message: string;
    type: string;
}

export interface Checks {
    address_line1_check: string;
    address_postal_code_check: string;
    cvc_check: string;
}

export interface Card {
    brand: string;
    checks: Checks;
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    installments?: any;
    last4: string;
    mandate?: any;
    network: string;
    three_d_secure?: any;
    wallet?: any;
}

export interface PaymentMethodDetails {
    card: Card;
    type: string;
}

export interface Refunds {
    object: string;
    data: any[];
    has_more: boolean;
    total_count: number;
    url: string;
}

export interface Metadata2 {
}

export interface Source {
    id: string;
    object: string;
    address_city: string;
    address_country: string;
    address_line1: string;
    address_line1_check: string;
    address_line2?: any;
    address_state: string;
    address_zip: string;
    address_zip_check: string;
    brand: string;
    country: string;
    customer?: any;
    cvc_check: string;
    dynamic_last4?: any;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    last4: string;
    metadata: Metadata2;
    name: string;
    tokenization_method?: any;
}

export interface Payment {
    id: string;
    object: string;
    amount: number;
    amount_captured: number;
    amount_refunded: number;
    application?: any;
    application_fee?: any;
    application_fee_amount?: any;
    balance_transaction: string;
    billing_details: BillingDetails;
    calculated_statement_descriptor: string;
    captured: boolean;
    created: number;
    currency: string;
    customer?: any;
    description?: any;
    destination?: any;
    dispute?: any;
    disputed: boolean;
    failure_balance_transaction?: any;
    failure_code?: any;
    failure_message?: any;
    fraud_details: FraudDetails;
    invoice?: any;
    livemode: boolean;
    metadata: Metadata;
    on_behalf_of?: any;
    order?: any;
    outcome: Outcome;
    paid: boolean;
    payment_intent?: any;
    payment_method: string;
    payment_method_details: PaymentMethodDetails;
    receipt_email?: any;
    receipt_number?: any;
    receipt_url: string;
    refunded: boolean;
    refunds: Refunds;
    review?: any;
    shipping?: any;
    source: Source;
    source_transfer?: any;
    statement_descriptor?: any;
    statement_descriptor_suffix?: any;
    status: string;
    transfer_data?: any;
    transfer_group?: any;
}

export interface PaymentResponse {
    data: Payment
}