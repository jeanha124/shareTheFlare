class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :owner_id, null: false
      t.integer :album_id
      t.string :title, null: false
      t.text :description
      t.string :img_url, null: false

      t.timestamps
    end
    add_index :photos, :owner_id
    add_index :photos, :album_id
  end
end
