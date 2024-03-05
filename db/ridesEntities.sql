CREATE TABLE rides (
    id UUID DEFAULT uuid_generate_v4() NOT NULL,
    from_location JSON NOT NULL,
    to_location JSON,
    ride_status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id VARCHAR(255) NOT NULL,
    driver_id VARCHAR(255),
    payment_source VARCHAR(255),
    PRIMARY KEY (id)
)