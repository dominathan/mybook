class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :position
      t.string :group
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
