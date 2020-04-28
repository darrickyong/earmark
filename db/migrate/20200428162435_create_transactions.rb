class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :amount, null: false
      t.integer :payer_id, null: false
      t.integer :expense_id, null: false
      t.timestamps
    end
    add_index :transactions, :payer_id
    add_index :transactions, :expense_id
  end
end
