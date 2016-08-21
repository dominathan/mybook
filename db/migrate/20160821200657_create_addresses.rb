class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.string :street_one
      t.string :street_two
      t.string :street_three
      t.string :ciy
      t.string :zip
      t.string :state
      t.string :country
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
