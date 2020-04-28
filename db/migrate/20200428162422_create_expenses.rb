class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :name, null: false
      t.integer :amount, null: false
      t.integer :owner_id, null: false
      t.date :date, null: false
      t.timestamps
    end
    add_index :expenses, :owner_id
  end
end
