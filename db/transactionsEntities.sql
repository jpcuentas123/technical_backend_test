CREATE TABLE transactions (
    id UUID DEFAULT uuid_generate_v4() NOT NULL,
    payment_source_id VARCHAR(255) NOT NULL,
    transaction_status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ride_id VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    PRIMARY KEY (id)
)