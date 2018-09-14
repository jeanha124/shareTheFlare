class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :photo_id, null: false
      t.integer :friend_id

      t.timestamps
    end
    add_index :tags, :author_id
    add_index :tags, :photo_id
    add_index :tags, :friend_id
  end
end
