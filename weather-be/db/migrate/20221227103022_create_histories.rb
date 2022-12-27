class CreateHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :histories do |t|
      t.string :weather, null: false, default: ""
      t.belongs_to :user, foreign_key: true, null: false
      t.timestamps
    end
  end
end
