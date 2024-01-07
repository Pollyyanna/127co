<script lang="ts">
    import Table from "$lib/components/Table.svelte";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  
    import type { PageServerData } from "./$types";
    import { requestHeaders as headers } from "$lib/headers";
  
    export let data: NonNullable<PageServerData>;
  
    let rows = data["request"];
  
    const handleEdit = async (id: number) => {};
  
    const handleDelete = async (id: number) => {
      await fetch(
        "/cooperative/api/database/delete", {
          method: "POST",
          body: JSON.stringify({
            id,
            table: "Request"
          })
        });
    };
  </script>
  
  <main class="w-full">
    <Breadcrumb
      items={[
        { href: "/cooperative", text: "Cooperative" },
        { href: "/cooperative/request", text: "Request" },
      ]}
    />
    <a
      href="/cooperative/request/add"
      class="bg-buttonp rounded-lg z-4 border-2 w-40 border-outline p-3 mb-4 flex items-center hover:bg-buttonphover active:bg-buttonpactive"
    >
      <span class="text-3xl material-symbols-outlined mr-2"> add </span>
      <div class="flex flex-col h-full">
        <span>Add an Entry</span>
      </div>
    </a>
    <Table
      primaryKey="Request_Id"
      {headers}
      {rows}
      {handleEdit}
      {handleDelete}
    />
  </main>
  