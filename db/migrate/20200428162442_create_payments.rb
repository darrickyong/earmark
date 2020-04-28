class CreatePayments < ActiveRecord::Migration[5.2]
  def change
    create_table :payments do |t|
      t.integer :amount, null: false
      t.integer :payee_id, null: false
      t.integer :payer_id, null: false
      t.date :date, null: false
      t.timestamps
    end
    add_index :payments, :payee_id
    add_index :payments, :payer_id
  end
end
