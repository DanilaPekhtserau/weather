class CreateWeathers < ActiveRecord::Migration[5.2]
  def change
    create_table :weathers do |t|
      t.string :town, null: false, default: ""
      t.string :weather_state, null: false, default: ""
      t.integer :temperature, null: false, default: 0
      t.string :image, null: false, default: ""
      t.timestamps
    end
  end
end
